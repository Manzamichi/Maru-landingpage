import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramDetails  } from './program-details/program-details'; 



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProgramDetails
  ],
  exports: [
    ProgramDetails
  ]
})
export class ProgramDetailsModule { }
