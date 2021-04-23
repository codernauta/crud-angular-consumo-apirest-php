import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = 'http://localhost/apirestphp/clientes';
  constructor(private http: HttpClient) { }

  obtenerClientes(): Observable<any> {
    return this.http.get(`${this.url}/seleccionar.php`);
  }

  obtenerDonde(id: number): Observable<any> {
    return this.http.get(`${this.url}/seleccionar.php?id=`+id);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.url}/eliminar.php?id=`+id);
  }

  agregar(cliente: any): Observable<any> {
    return this.http.post(`${this.url}/agregar.php`, JSON.stringify(cliente));
  }

  editar(cliente: any): Observable<any> {
    return this.http.put(`${this.url}/editar.php`, JSON.stringify(cliente));
  }

}
