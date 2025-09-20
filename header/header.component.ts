import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
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
    Ripple,
    RouterModule
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', items: [
        { label: 'Submenu 1', icon: 'pi pi-fw pi-plus' },
        { label: 'Submenu 2', icon: 'pi pi-fw pi-plus' },
        { label: 'Submenu 3', icon: 'pi pi-fw pi-plus' }
      ] },
      { label: 'About' },
      { label: 'Services' },
      { label: 'Testimonials'},
      { label: 'Blog' }
    ];
  }

}
