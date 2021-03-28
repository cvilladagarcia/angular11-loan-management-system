import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private baseUrl = 'http://localhost:8080/loan-management-system/api/v1/loans';

  constructor(private http: HttpClient) { }

  getLoan(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createLoan(person: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, person);
  }

  updateLoan(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteLoan(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getLoansList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
