import { Injectable, Injector } from "@angular/core";
import { BaseResourceService } from "src/app/shared/services/base-resource.service";
import { Projeto } from "./projeto.model";

import { PROJETO_API } from "src/app/app.api";

@Injectable({
    providedIn: 'root'
})
export class ProjetoService extends BaseResourceService<Projeto> {

    constructor(protected injector: Injector) {
        super(`${PROJETO_API}/Projetos`, injector, Projeto.fromJson);
    }

}
