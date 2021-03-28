import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private baseUrl = 'http://localhost:8080/loan-management-system/api/v1/assets';

  constructor(private http: HttpClient) { }

  getAsset(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAsset(person: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, person);
  }

  updateAsset(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAsset(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAssetsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
