import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Description } from './description/description';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Description
  ],
  exports: [Description
  ]
})
export class DescriptionModule { }
