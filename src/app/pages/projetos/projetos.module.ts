import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosListComponent } from './projetos-list/projetos-list.component';
import { ProjetosRouginModule } from './projetos-routing.module';
import { ProjetosFormComponent } from './projetos-form/projetos-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProjetosListComponent, ProjetosFormComponent],
  imports: [
    CommonModule,
    ProjetosRouginModule,
    SharedModule
  ]
})
export class ProjetosModule { }
