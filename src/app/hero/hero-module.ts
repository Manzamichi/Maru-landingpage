import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './hero/hero';



@NgModule({
  imports: [
    CommonModule,
    Hero
  ],
  exports: [Hero]
})
export class HeroModule { }
