import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from '././header/header.module';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('maru-landing-page');
}
