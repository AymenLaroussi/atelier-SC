import { Component, OnInit } from '@angular/core';
import { Atelier } from '../../../shared/models';
import { AtelierService } from 'src/app/core/services/atelier.service';
import { ParticipantService } from 'src/app/core/services/participant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  ateliers: Atelier[] = [];
  participantId: number | null = null; 
  message = '';

  constructor(
    private atelierService: AtelierService,
    private participantService: ParticipantService
  ) {}

  ngOnInit(): void {
    this.loadAteliers();
  }

  loadAteliers(): void {
    this.atelierService.getAteliers().subscribe({
      next: (data: Atelier[]) => this.ateliers = data,
      error: (err) => console.error(err),
    });
  }

  registerToAtelier(atelierId: number): void {
    if (!this.participantId) {
      this.message = "Veuillez vous inscrire d'abord comme participant.";
      return;
    }

    this.participantService.registerToAtelier(atelierId, this.participantId).subscribe({
      next: () => {
        this.message = "Inscription à l'atelier réussie !";
      },
      error: () => {
        this.message = "Erreur lors de l'inscription à l'atelier.";
      }
    });
  }
}
