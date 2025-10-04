import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    CommonModule,
    RouterModule
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  items: MenuItem[] | undefined;
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }

  ngOnInit() {
    this.items = [
      { label: 'Home', command: () => this.scrollToSection('hero-section')},
      { label: 'About', command: () => this.scrollToSection('about-section') },
      { label: 'Services', command: () => this.scrollToSection('services-section') },
      { label: 'Testimonials', command: () => this.scrollToSection('testimonials-section')},
      { label: 'Blog', command: () => this.scrollToSection('blog-section') }
    ];
  }

}
