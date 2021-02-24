import { Injectable, Injector } from "@angular/core";
import { BaseResourceService } from "src/app/shared/services/base-resource.service";
import { Metadado } from "./metadado.model";

import { PROJETO_API } from "src/app/app.api";

@Injectable({
    providedIn: 'root'
})
export class MetadadoService extends BaseResourceService<Metadado> {

    constructor(protected injector: Injector) {
        super(`${PROJETO_API}/Metadados`, injector, Metadado.fromJson);
    }

}
