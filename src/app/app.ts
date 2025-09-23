import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from '././header/header.module';
import { Hero } from "./hero/hero/hero";
//import { Features } from "./features/features/features";
import { Description } from "./description/description/description";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderModule, Hero, Description],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('maru-landing-page');
}
