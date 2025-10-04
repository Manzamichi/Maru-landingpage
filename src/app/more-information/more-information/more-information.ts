import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { CommonModule } from '@angular/common';

interface Icons {
  iconName: string;
}

@Component({
  selector: 'app-more-information',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './more-information.html',
  styleUrl: './more-information.scss',
  standalone: true
})
export class MoreInformation {

  icons: Icons[] = [
    { iconName: 'Star' },
    { iconName: 'Star' },
    { iconName: 'Star' },
    { iconName: 'Star' },
    { iconName: 'Star' }
  ]

}
