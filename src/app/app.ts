import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from '././header/header.module';
import { Hero } from "./hero/hero/hero";
import { Features } from "./features/features/features";
import { Description } from "./description/description/description";
import { Results } from "./results/results/results";
import { MoreInformation } from "./more-information/more-information/more-information";
import { ProgramDetails } from './program-details/program-details/program-details';
import { Form } from './form/form/form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderModule, Hero, Features, Description, Results, MoreInformation, ProgramDetails, Form],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('maru-landing-page');
}
