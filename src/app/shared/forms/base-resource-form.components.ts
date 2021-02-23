import { AfterContentChecked, Injectable, Injector, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { BaseResourceModel } from "../models/base-resource.model";
import { BaseResourceService } from "../services/base-resource.service";

@Injectable()
export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

    currentAction: string;
    resourceForm: FormGroup
    pageTitle: string;
    serverErrorMessages: string[] = null;
    submittingForm: boolean = false;

    protected route: ActivatedRoute;
    protected router: Router;
    protected formBuilder: FormBuilder;

    constructor(
        protected injector: Injector,
        public resource: T,
        protected resourceService: BaseResourceService<T>,
        protected jsonDataRoResourceFn: (jsonData) => T
    ) {
        this.route = injector.get(ActivatedRoute);
        this.router = injector.get(Router);
        this.formBuilder = injector.get(FormBuilder);
    }

    ngAfterContentChecked(): void {
        this.setPageTitle();
    }

    ngOnInit(): void {
        this.setCurrentAction();
        this.buildResourceForm();
        this.loadResource();
    }

    protected setCurrentAction() {
        this.currentAction = this.route.snapshot.url[0].path == 'new' ? 'new' : 'edit';
    }

    protected setPageTitle() {
        this.pageTitle = this.currentAction == 'new' ? this.creationPageTitle() : this.editionPageTitle();
    }

    protected creationPageTitle(): string {
        return "Novo";
    }
    protected editionPageTitle(): string {
        return "Editar";
    }

    protected abstract buildResourceForm(): void;

    submitForm() {

        this.submittingForm = true
        if (this.currentAction == 'new') {
            this.createResource();
        } else {
            this.updateResource();
        }

    }

    protected loadResource() {

        if (this.currentAction == 'edit') {
            this.route.paramMap.pipe(
                switchMap(params => this.resourceService.getById(params.get('id')))
            )
                .subscribe(
                    (resource) => {
                        this.resource = resource;
                        this.resourceForm.patchValue(resource) //bind do resource no formulário na edição
                    },
                    (error) => alert("Ocorreu um erro, tente novamente mais tarde")
                )
        }
    }

    protected createResource() {
        const resource: T = this.jsonDataRoResourceFn(this.resourceForm.value);
        console.log(resource);
        this.resourceService.create(resource)
            .subscribe(
                resource => this.actionForSuccess(resource),
                error => this.actionForError(error)
            )
    }

    protected updateResource() {
        const resource: T = this.jsonDataRoResourceFn(this.resourceForm.value);
        this.resourceService.update(resource)
            .subscribe(
                resource => {
                    this.actionForSuccess(resource)
                },
                error => this.actionForError(error)
            )
    }

    protected actionForSuccess(resource: T) {
        // toastr.success("Solicitação processada com sucesso");
        console.log(this.route.snapshot.parent);

        //ROTA INICIAL DO COMPONENTE
        const baseComponentPath: string = this.route.snapshot.parent.url.length > 0 ? this.route.snapshot.parent.url[0].path : '';


        //redirecionar para recarregar a página
        this.router.navigateByUrl(baseComponentPath, { skipLocationChange: true }).then(
            () => this.router.navigate([baseComponentPath, resource.id, 'edit'])
        )

    }

    protected actionForError(error) {
        // toastr.error("Ocorreu erro ao processar solicitação")
        this.submittingForm = false;

        if (error.status === 422) {
            this.serverErrorMessages = JSON.parse(error._body).errors;
        } else {
            this.serverErrorMessages = ['Falha na comunicação com o servidor, tente novamente mais tarde']
        }

    }

}
