import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Projeto extends BaseResourceModel {

    constructor(
        public id?: string,
        public name?: string
    ) {
        super();
    }

    static fromJson(jsonData: any): BaseResourceModel {
        let projeto = new Projeto();
        projeto.id = jsonData['id'];
        projeto.name = jsonData['name'];
        return projeto;
    }

}
