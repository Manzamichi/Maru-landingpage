import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';


interface CustomMenuItem extends MenuItem {
  mobileOnly?: boolean; 
}

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
    LayoutModule
]
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('menuBar') menuBar: Menubar | undefined;

  isMobile: boolean = false;
  isDesktop: boolean = false;
  items: CustomMenuItem[] = [];
  originalItems: CustomMenuItem[] = [];

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly cd: ChangeDetectorRef
  ) { }

  baseItems: MenuItem[] | undefined;
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }

  ngOnInit() {

    const baseItems: CustomMenuItem[] = [
      { label: 'Inicio', command: () => this.scrollToSection('hero-section'), icon: "pi pi-home" },
      { label: 'Acerca de', command: () => this.scrollToSection('about-section'), icon: "pi pi-info-circle" },
      { label: 'Servicios', command: () => this.scrollToSection('services-section'), icon: "pi pi-sparkles" },
      { label: 'Resultados', command: () => this.scrollToSection('testimonials-section'), icon: "pi pi-user-edit"},
      { label: 'Contáctanos', command: () => this.scrollToSection('blog-section'), icon: "pi pi-address-book"}
    ];

    const mobileAppButton: CustomMenuItem = {
      label: 'Nuestra app', command: () => window.location.href = 'https://mobile-maru.mastergeek.mx/login', icon: 'pi pi-mobile', mobileOnly: true
    }

    this.items = [...baseItems, mobileAppButton];

    this.originalItems = [...this.items];

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      '(max-width: 960px)'
    ]).subscribe(result => {
      this.isMobile = result.matches;
      this.isDesktop = !result.matches;
      this.filterMenuItems(); 
      this.cd.detectChanges(); 
    });
  }

  filterMenuItems() {
    if (!this.isMobile) {
      this.items = this.items.filter(item => !item.mobileOnly);
    } else {
      this.items = [...this.originalItems];
    }
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
