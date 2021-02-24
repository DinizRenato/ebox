import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProjetosListComponent } from './projetos-list/projetos-list.component';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosFormComponent } from './projetos-form/projetos-form.component';
import { ProjetosComponent } from './projetos/projetos.component';


@NgModule({
  declarations: [ProjetosListComponent, ProjetosFormComponent, ProjetosComponent],
  imports: [
    CommonModule,
    ProjetosRoutingModule,
    SharedModule
  ]
})
export class ProjetosModule { }
