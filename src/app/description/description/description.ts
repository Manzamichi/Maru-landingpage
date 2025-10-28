import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from "../../shared/button/button";

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './description.html',
  styleUrl: './description.scss'
})
export class Description {
  reviewers = [
    { avatar: '' },
    { avatar: '' },
    { avatar: '' }
  ];

  dietCards = [
    { title: "REACTIVAR TU METABOLISMO", description: "Un metabolismo rápido <br> significa que quemas más <br> calorías, ¡incluso en reposo!" },
    { title: "BALANCEAR TUS HORMONAS", description: "Regular tus niveles hormonales, <br> especialmente si estás <br> experimentando la <br> perimenopausia o menopausia." },
    { title: "ENSEÑAR A TU CUERPO A SER EFICIENTE", description: "Tu cuerpo aprenderá a usar las <br> calorías de manera óptima, sabiendo <br> cuándo almacenar y cuándo quemar." }
  ]
}
