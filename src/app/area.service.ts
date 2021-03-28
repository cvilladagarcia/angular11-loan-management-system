import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private baseUrl = 'http://localhost:8080/loan-management-system/api/v1/areas';

  constructor(private http: HttpClient) { }

  getArea(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createArea(area: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, area);
  }

  updateArea(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteArea(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAreasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
