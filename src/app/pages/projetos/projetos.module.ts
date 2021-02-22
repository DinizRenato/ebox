import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosListComponent } from './projetos-list/projetos-list.component';
import { ProjetosRouginModule } from './projetos-routing.module';


@NgModule({
  declarations: [ProjetosListComponent],
  imports: [
    CommonModule,
    ProjetosRouginModule
  ]
})
export class ProjetosModule { }
