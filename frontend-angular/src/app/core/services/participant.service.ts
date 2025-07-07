import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private apiUrl = 'http://localhost:8000/api';  

  constructor(private http: HttpClient) {}

  registerParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(`${this.apiUrl}/participants`, participant);
  }

  registerToAtelier(atelierId: number, participantId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/ateliers/${atelierId}/participants/${participantId}`, {});
  }
}
