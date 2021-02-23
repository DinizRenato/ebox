import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosListComponent } from './projetos-list/projetos-list.component';
import { ProjetosRouginModule } from './projetos-routing.module';
import { ProjetosFormComponent } from './projetos-form/projetos-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjetosComponent } from './projetos/projetos.component';


@NgModule({
  declarations: [ProjetosListComponent, ProjetosFormComponent, ProjetosComponent],
  imports: [
    CommonModule,
    ProjetosRouginModule,
    SharedModule
  ]
})
export class ProjetosModule { }
