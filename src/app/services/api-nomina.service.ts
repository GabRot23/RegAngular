import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response.model';
import { Empleado } from '../models/empleado.model';
import { tap } from 'rxjs/operators'

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiNominaService {

  url: string = 'https://localhost:44306/api/empleado/';

  constructor(private http: HttpClient) { }

  getNomina(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }

  add(empleado: Empleado): Observable<Response> {
    return this.http.post<Response>(this.url, empleado, httpOption);
  }

  edit(empleado: Empleado): Observable<Response> {
    return this.http.put<Response>(this.url, empleado, httpOption);
  }

  delete(id?: number): Observable<Response> {
    return this.http.delete<Response>(`${this.url}${id}`);
  }

  getEmpleado(Rut: number): Observable<Empleado> {
    return this.http.get<Empleado>(this.url + Rut)
      .pipe(tap(_ => console.log('realizado')));
  }
}
