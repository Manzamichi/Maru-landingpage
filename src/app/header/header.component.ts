import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Menubar, MenubarModule } from 'primeng/menubar';
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
    RouterModule,
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('menuBar') menuBar: Menubar | undefined;

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
      { label: 'Inicio', command: () => this.scrollToSection('hero-section'), icon: "pi pi-home" },
      { label: 'Acerca de', command: () => this.scrollToSection('about-section'), icon: "pi pi-info-circle" },
      { label: 'Servicios', command: () => this.scrollToSection('services-section'), icon: "pi pi-sparkles" },
      { label: 'Resultados', command: () => this.scrollToSection('testimonials-section'), icon: "pi pi-user-edit"},
      { label: 'Contactanos', command: () => this.scrollToSection('blog-section'), icon: "pi pi-address-book"}
    ];
  }

  ngAfterViewInit() {
    this.setupOutsideClickListener();
  }

  setupOutsideClickListener() {
    document.addEventListener('click', (event: MouseEvent) => {
      const menuElement = this.menuBar?.el.nativeElement;
      if (!menuElement) return;
      const targetElement = event.target as HTMLElement;
      if (targetElement.classList.contains('p-menubar-mobile-active')) {
          if (this.menuBar) {
              this.menuBar.mobileActive = false;
          }
      }
    });
  }

}
