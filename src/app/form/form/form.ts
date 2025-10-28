import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormsModule } from '@angular/forms';
import { CorreoService } from '../../services/correo';


@Component({
  selector: 'app-form',
  imports: [ 
    ReactiveFormsModule,
    CommonModule,
    FormsModule
   ],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form implements OnInit {

  respuesta: any = {};
  contactoFormulario!: FormGroup;

  constructor(private readonly fb: FormBuilder, protected readonly correoService: CorreoService) {}

  ngOnInit() {
    this.contactoFormulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      celular: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Usar 'celular' si ese es el campo en PocketBase
      mensaje: ['', Validators.required]
    });
  }

  enviar() {
    if (this.contactoFormulario.valid) {
      let respuesta = [
        {
          nombre: 'Nombre',
          valor: this.respuesta.nombre
        },
        {
          nombre: 'Email',
          valor: this.respuesta.email
        },
        {
          nombre: 'Celular',
          valor: this.respuesta.celular
        },
      ];
      this.respuesta.datosFormato = respuesta;
      let enviarRespuesta = this.respuesta;
      this.correoService.datosFormulario(enviarRespuesta, 'Contacto');
      this.contactoFormulario.reset();
    } else {
      this.markAllAsTouched();
    }
  }

  markAllAsTouched() {
    Object.values(this.contactoFormulario.controls).forEach(control => {
      control.markAsTouched();
    });
  }
  
}
