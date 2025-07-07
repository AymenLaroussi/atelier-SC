import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atelier } from '../../shared/models';

@Injectable({ providedIn: 'root' })
export class AtelierService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getAteliers(): Observable<Atelier[]> {
    return this.http.get<Atelier[]>(`${this.baseUrl}/ateliers`);
  }

  getAteliersByFormateur(userId: number): Observable<Atelier[]> {
    return this.http.get<Atelier[]>(`${this.baseUrl}/atelier/formateur/${userId}`);
  }
}
