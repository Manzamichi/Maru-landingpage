import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from '././header/header.module';
import { Hero } from "./hero/hero/hero";
<<<<<<< HEAD
=======
import { Features } from "./features/features/features";
import { Description } from "./description/description/description";
>>>>>>> f081a51 (Configuracion de la descripcion del programa)


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderModule, Hero, Features, Description],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('maru-landing-page');
}
