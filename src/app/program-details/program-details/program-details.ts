import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProgramFeatures {
  text: string;
  isPrimary: boolean;
}

@Component({
  selector: 'app-program-details',
  imports: [
    CommonModule
  ],
  templateUrl: './program-details.html',
  styleUrl: './program-details.scss',
  standalone: true
})
export class ProgramDetails{

  features: ProgramFeatures[] = [
    { text: 'Programación 100% Online de Entrenamiento y Macros Personalizados', isPrimary: true },
    { text: 'Acceso a Nuestra Aplicación Exclusiva HFM', isPrimary: false },
    { text: 'Chequeos y Ajustes Semanales', isPrimary: true },
    { text: 'Comunicación Continua con tu Coach', isPrimary: false },
    { text: 'Chats Grupales para Responsabilidad y Apoyo', isPrimary: true },
    { text: 'Educación sobre Nutrición/Macros y Proporciones Personalizadas', isPrimary: false },
  ];

}
