import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Emailer } from '../../emailer';


@Component({
  selector: 'app-form',
  imports: [ 
    ReactiveFormsModule,
   ],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form implements OnInit {

  formContacto!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly emailer: Emailer) {}

  ngOnInit() {
    this.formContacto = this.fb.group({
      // Usar 'email' en el TS para la validación de Angular
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      celular: ['', Validators.required] // Usar 'celular' si ese es el campo en PocketBase
      // Nota: El backend de correo usará 'nombre' y 'email'
    });
  }

  enviar() {
    if (this.formContacto.invalid) return;

    // ✅ Llama al nuevo método del servicio que usa HttpClient
    this.emailer.enviarMensaje(this.formContacto.value).subscribe({
      next: () => {
        alert('✅ Mensaje enviado correctamente');
        this.formContacto.reset();
      },
      error: (err) => {
        console.error(err);
        alert('❌ Ocurrió un error al enviar tu mensaje');
      }
    });
  }
  
}
