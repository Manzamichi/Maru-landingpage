import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  socialNetworks = [
    { name: 'Facebook', url: 'https://www.facebook.com/maru', icon: 'pi pi-facebook' },
    { name: 'Twitter', url: 'https://www.twitter.com/maru', icon: 'pi pi-twitter' },
    { name: 'Instagram', url: 'https://www.instagram.com/maru', icon: 'pi pi-instagram' },
  ];

}
