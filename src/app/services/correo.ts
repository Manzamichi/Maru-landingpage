import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

interface FormatoJSON {
	mail_data: {
		clientName: string,
		clientMail: string,
		subject: string,
		messageTemplate: string,
		templateData: any,
	},
	notify_client: boolean,
	form_data: any,
	data_campo: boolean,
	originPage: string,
	botonOrigen: string,
}

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  URL = environment.APIEndpoint;
  envioCorreo = environment.envioCorreo;
  datosContacto: any = {};
  procesarEnvio: number = 1;

  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  guardarDatos($datos: any): Observable<any> {
		let data = Object.assign({}, $datos);
		return this.http.post(`${this.URL}/formularios/${this.envioCorreo}`, data);
	}

  datosFormulario(datosContacto: any, botonOrigen: string = '', ruta: string = 'contacto-enviado'): any {
		this.procesarEnvio = 2;
		let nombre: string;
		if(datosContacto.apellido) {
			nombre = datosContacto.nombre + " " +  datosContacto.apellido;
		} else {
			nombre = datosContacto.nombre;
		}
		let JSONTemplateData = {
			nombre: nombre
		};
		let datoFormateado: FormatoJSON = {
			mail_data: {
				clientName: nombre,
				clientMail: datosContacto.email,
				subject: "¡Hola, " + datosContacto.nombre + " está interesado en sus servicios!",
				messageTemplate: "contactoGANT.php",
				templateData: JSONTemplateData,
			},
			notify_client: false,
			form_data: datosContacto.datosFormato,
			data_campo: true,
			originPage: "contacto-formulario",
			botonOrigen: botonOrigen,
		}
		this.guardarDatos(datoFormateado)
		.subscribe(
			response => {
				this.procesarEnvio = 1;
				this.mensaje('Mensaje enviado con exito');
				setTimeout(() => {
					this.router.navigate(['enviado/'+ruta]);
				}, 100);
			},
			error => {
				this.procesarEnvio = 1;
				this.mensaje('No se pudo enviar la información, por favor vuelva a intentar enviar el su informacion', 'alert-snack-bar');
			}
		);
	}

  mensaje(mensaje: any, tipo: string = 'success-snack-bar') {
		// this.snackBar.open(mensaje, '', {
		// 	duration: 3000,
		// 	horizontalPosition: 'right',
		// 	verticalPosition: 'bottom',
		// 	panelClass: [tipo]
		// });
	}
}
