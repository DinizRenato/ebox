import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Metadado extends BaseResourceModel {

    constructor(
        public projetoId?: string,
        public order?: number,
        public name?: string,
        public type?: string,
        public options?: string
    ) {
        super();
    }

    static types = {
        inteiro: 'Inteiro',
        texto: 'Texto',
        textoArea: 'Texto Area',
        data: 'Data',
        booleano: 'Radio',
        checkbox: 'Checkbox'
    };

    static fromJson(jsonData: any): Metadado {

        let metadado = new Metadado();

        metadado.id = jsonData['id'];
        metadado.projetoId = jsonData['projetoId'];
        metadado.order = +jsonData['order'];
        metadado.name = jsonData['name'];
        metadado.type = jsonData['type'];
        metadado.options = jsonData['options'];

        return metadado;

    }

}
