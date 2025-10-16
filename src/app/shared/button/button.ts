import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() sectionId: string = ""; 
  @Input() styles: string = "";
  @Input() label: string = "";

  scrollToSection(): void {
    const element = document.getElementById(this.sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }
}
