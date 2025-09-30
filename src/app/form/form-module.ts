import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form } from './form/form';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Form
  ],
  exports: [
    Form
  ]
})
export class FormModule { }
