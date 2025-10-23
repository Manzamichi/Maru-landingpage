import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Emailer {
  private readonly pb: PocketBase = new PocketBase('https://apimaru.mastergeek.mx');

  private readonly apiUrl = 'https://apimaru.mastergeek.mx/api/collections/contacto/records';

  constructor(private readonly http: HttpClient){}

  get client(): PocketBase {
    return this.pb;
  }

  enviarMensaje(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
