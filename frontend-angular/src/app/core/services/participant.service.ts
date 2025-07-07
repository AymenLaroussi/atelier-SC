import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private laravelApiUrl = 'http://localhost:8000/api';  
  private flaskApi = 'http://localhost:5000'

  constructor(private http: HttpClient) {}

  registerParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(`${this.flaskApi}/register`, participant);
  }

  registerToAtelier(atelierId: number, participantId: number): Observable<any> {
    return this.http.post(`${this.laravelApiUrl}/atelier/${atelierId}/participant/${participantId}`,'');
  }

  getParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(`${this.laravelApiUrl}/participants`);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.flaskApi}/login`, credentials);
  }
}
