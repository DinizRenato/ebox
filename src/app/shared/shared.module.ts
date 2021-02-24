import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MetadadoInfoComponent } from './components/metadado-info/metadado-info.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [MetadadoInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [FormsModule, ReactiveFormsModule, MetadadoInfoComponent]
})
export class SharedModule { }
