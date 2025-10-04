import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-features',
  imports: [
    CommonModule,
    LucideAngularModule 
  ],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features { }
