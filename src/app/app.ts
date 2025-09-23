import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from '././header/header.module';
import { Hero } from "./hero/hero/hero";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderModule, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('maru-landing-page');
}
