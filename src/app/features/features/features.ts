import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Button } from "../../shared/button/button";

@Component({
  selector: 'app-features',
  imports: [
    CommonModule,
    LucideAngularModule,
    Button
],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features { 
  
}
