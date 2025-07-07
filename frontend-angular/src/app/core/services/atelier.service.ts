import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atelier } from '../../shared/models';

@Injectable({ providedIn: 'root' })
export class AtelierService {
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getAteliers(): Observable<Atelier[]> {
    return this.http.get<Atelier[]>(`${this.baseUrl}/api/ateliers`);
  }
}
