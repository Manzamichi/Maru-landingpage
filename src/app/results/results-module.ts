import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Results } from './results/results';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Results
  ],
  exports: [Results]
})
export class ResultsModule { }
