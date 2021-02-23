import { Injectable, Injector } from "@angular/core";
import { BaseResourceService } from "src/app/shared/services/base-resource.service";
import { Projeto } from "./projeto.model";

import { PROJETO_API } from "src/app/app.api";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProjetoService extends BaseResourceService<Projeto> {

    constructor(protected injector: Injector) {
        super(`${PROJETO_API}/Projetos`, injector, Projeto.fromJson);
    }

    getProjetoWithMetadados(id: string): Observable<Projeto> {
        return this.http.get(`${PROJETO_API}/Projetos/metadados/${id}`).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        )
    }

}
