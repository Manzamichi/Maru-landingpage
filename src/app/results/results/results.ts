import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  imports: [
    CommonModule
  ],
  templateUrl: './results.html',
  styleUrl: './results.scss',
  standalone: true
})
export class Results implements OnInit {
  leftImage = '/images/after.png';
  rightImage = '/images/placeholder.png';
  sliderPosition: number = 300; // Posición inicial
  containerWidth: number = 600;
  isDragging: boolean = false;

  ngOnInit(): void {
    // Inicializar la posición del slider al centro del contenedor
    this.sliderPosition = this.containerWidth / 2;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) {
      return; // Detiene la función si no se está arrastrando
    }

    const container = (event.currentTarget as HTMLElement).parentElement; // Apunta al contenedor principal
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let newPosition = event.clientX - rect.left;

    // Lógica para limitar la posición
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > rect.width) {
      newPosition = rect.width;
    }

    this.sliderPosition = newPosition;
  }

  // 1. Iniciar Arrastre: Cuando el usuario presiona el mouse sobre el deslizador
  startDragging(event: MouseEvent) {
    event.preventDefault(); // Evita que el navegador arrastre otros elementos
    this.isDragging = true;
  }

  // 2. Detener Arrastre: Cuando el usuario suelta el mouse (en cualquier lugar)
  stopDragging() {
    this.isDragging = false;
  }

  Results = [
    { image: '/images/change1.jpeg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", alt: "hola" },
    { image: '/images/change2.jpeg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", alt: "hola" },
    { image: '/images/change3.jpeg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", alt: "hola" },
    { image: '/images/change4.jpeg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", alt: "hola" },
    { image: '/images/change5.jpeg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", alt: "hola" },
    { image: '/images/change6.jpeg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", alt: "hola" },
    { image: '/images/change7.jpeg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", alt: "hola" }
    ] 
}
