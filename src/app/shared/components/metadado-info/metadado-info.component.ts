import { Component, Input, OnInit } from '@angular/core';
import { Metadado } from 'src/app/pages/metadados/shared/metadado.model';

@Component({
  selector: 'app-metadado-info',
  templateUrl: './metadado-info.component.html',
  styleUrls: ['./metadado-info.component.css']
})
export class MetadadoInfoComponent implements OnInit {

  @Input() metadado: Metadado;

  constructor() { }

  ngOnInit(): void {
  }

  optionsPorTipo(): any {

    switch (this.metadado.type) {

      case 'data':
        return new Date(this.metadado.options);
      case 'checkbox':
        return this.metadado.options.replace('[', "").replace(']', "").split(',');
      default:
        return this.metadado.options;

    }

  }

}
