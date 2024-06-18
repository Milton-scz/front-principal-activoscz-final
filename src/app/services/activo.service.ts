import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {
  private apiUrl = 'https://back-microservicio-mobilexd.fly.dev'; // URL base de tu servidor

  constructor(private http: HttpClient) { }

  getActivos(page: number = 1, pageSize: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(`${this.apiUrl}/getActivos`, { params });
  }

  addActivo(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add-activo`, data);
  }
  deleteActivo(id: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/delete-activo/${id}`, {}); // Endpoint para eliminar activo
  }

  getActivo(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-activo/${id}`, {}); // Endpoint para eliminar activo
  }
  getCategorias(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-categorias`); // Endpoint para obtener activos
  }
  deleteCategoria(id: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/delete-categoria/${id}`, {}); // Endpoint para eliminar activo
  }
}

