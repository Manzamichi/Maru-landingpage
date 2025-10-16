import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Button } from "../../shared/button/button";

interface ProgramFeatures {
  text: string;
  isPrimary: boolean;
  iconName: string;
}

@Component({
  selector: 'app-program-details',
  imports: [
    CommonModule,
    LucideAngularModule,
    Button
],
  templateUrl: './program-details.html',
  styleUrl: './program-details.scss',
  standalone: true
})
export class ProgramDetails{

  features: ProgramFeatures[] = [
    { text: 'Programación 100% Online de Entrenamiento y Macros Personalizados', isPrimary: true, iconName: 'Monitor'},
    { text: 'Acceso a Nuestra Aplicación Exclusiva HFM', isPrimary: false, iconName: 'Smartphone'},
    { text: 'Chequeos y Ajustes Semanales', isPrimary: true, iconName: 'Calendar' },
    { text: 'Comunicación Continua con tu Coach', isPrimary: false, iconName: 'MessageCircle' },
    { text: 'Chats Grupales para Responsabilidad y Apoyo', isPrimary: true, iconName: 'Users' },
    { text: 'Educación sobre Nutrición/Macros y Proporciones Personalizadas', isPrimary: false, iconName: 'BookOpen' }
  ];
}
