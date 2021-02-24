import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetadadosFormComponent } from './metadados-form/metadados-form.component';
import { MetadadoRoutingModule } from "./metadado-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [MetadadosFormComponent],
  imports: [
    CommonModule,
    MetadadoRoutingModule,
    IMaskModule,
    SharedModule
  ]
})
export class MetadadosModule { }
