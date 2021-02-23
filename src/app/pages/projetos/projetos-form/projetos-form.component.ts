import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from 'src/app/shared/forms/base-resource-form.components';
import { Projeto } from '../shared/projeto.model';
import { ProjetoService } from '../shared/projeto.service';

@Component({
  selector: 'app-projetos-form',
  templateUrl: './projetos-form.component.html',
  styleUrls: ['./projetos-form.component.css']
})
export class ProjetosFormComponent extends BaseResourceFormComponent<Projeto> {

  constructor(
    protected injector: Injector,
    protected projetoService: ProjetoService
  ) {
    super(injector, new Projeto, projetoService, Projeto.fromJson)
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

}
