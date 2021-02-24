import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { filter, flatMap, switchMap } from 'rxjs/operators';
import { BaseResourceFormComponent } from 'src/app/shared/forms/base-resource-form.components';
import { Projeto } from '../../projetos/shared/projeto.model';
import { ProjetoService } from '../../projetos/shared/projeto.service';
import { Metadado } from '../shared/metadado.model';
import { MetadadoService } from '../shared/metadado.service';

@Component({
  selector: 'app-metadados-form',
  templateUrl: './metadados-form.component.html',
  styleUrls: ['./metadados-form.component.css']
})
export class MetadadosFormComponent extends BaseResourceFormComponent<Metadado> implements OnInit {

  projetos: Projeto[];
  projeto: Projeto;

  imaskConfig = {
    mask: Number,
    scale: 0,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ''
  };

  constructor(
    protected injector: Injector,
    private projetoService: ProjetoService,
    protected metadadoService: MetadadoService
  ) {
    super(injector, new Metadado, metadadoService, Metadado.fromJson)
  }

  ngOnInit() {
    this.loadProjetos();
    super.ngOnInit();
  }

  get typeOptions(): Array<any> {
    return Object.entries(Metadado.types).map(
      ([value, text]) => {
        return {
          text: text,
          value: value
        }
      }
    )
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      projetoId: [null, [Validators.required]],
      order: [0],
      name: [null, [Validators.required, Validators.minLength(3)]],
      type: ['text', [Validators.required]],
      options: [null, Validators.required]
    });
  }

  loadProjetos() {

    this.projetoService.getAll().subscribe(
      res => this.projetos = res
    )

  }

  onTypeSelected(value: string) {
    this.resourceForm.get('options').setValue('');
  }

  submitForm() {

    this.submittingForm = true

    const resource: Metadado = this.jsonDataRoResourceFn(this.resourceForm.value);

    if (resource.type == 'checkbox') {
      resource.options = Array(this.resourceForm.get('options').value).toString();
    } else if (resource.type == 'inteiro') {
      resource.options = this.resourceForm.get('options').value.toString();
    }

    if (this.currentAction == 'new') {

      this.projetoService.getProjetoWithMetadados(this.resourceForm.get('projetoId').value
      ).subscribe(
        res => {
          this.projeto = res,
            resource.order = this.projeto.metadados.length,
            this.metadadoService.create(resource)
              .subscribe(
                resource => { this.actionForSuccess(resource) },
                error => this.actionForError(error)
              )
        }
      )
    } else {

      this.updateResource();

    }

  }


}
