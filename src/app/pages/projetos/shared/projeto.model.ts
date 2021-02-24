import { BaseResourceModel } from "src/app/shared/models/base-resource.model";
import { Metadado } from "../../metadados/shared/metadado.model";

export class Projeto extends BaseResourceModel {

    constructor(
        public name?: string,
        public metadados?: Metadado[]
    ) {
        super();
    }

    static fromJson(jsonData: any): Projeto {
        let projeto = new Projeto();
        projeto.id = jsonData['id'] != undefined ? jsonData['id'] : '';
        projeto.name = jsonData['name'];
        projeto.metadados = jsonData['metadados'] != undefined ? jsonData['metadados'] : [];
        return projeto;
    }

}
