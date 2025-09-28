import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreInformation } from './more-information/more-information';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MoreInformation
  ],
  exports: [
    MoreInformation
  ]
})
export class MoreInformationModule { }
