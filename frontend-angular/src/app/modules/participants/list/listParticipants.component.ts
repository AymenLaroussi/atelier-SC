import { Component, OnInit } from '@angular/core';
import { ParticipantService } from 'src/app/core/services/participant.service';
import { Participant } from 'src/app/shared/models';
@Component({
  selector: 'app-participant-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListParticipantsComponent implements OnInit {
  participants: Participant[] = [];

  constructor(private participantService: ParticipantService) {}

  ngOnInit(): void {
    this.participantService.getParticipants().subscribe({
      next: (data) => this.participants = data,
      error: (err) => console.error('Failed to load participants', err)
    });
  }
}
