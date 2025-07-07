import { Component, OnInit } from '@angular/core';
import { Atelier } from '../../../shared/models';
import { AtelierService } from 'src/app/core/services/atelier.service';
import { ParticipantService } from 'src/app/core/services/participant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
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
    this.loadLoggedUser();    // ✅ Check if user is logged in
    this.loadAteliers();
  }

  loadLoggedUser(): void {
    const userData = localStorage.getItem('user');

    if (userData) {
      const user = JSON.parse(userData);
      this.participantId = user?.id || null;
    } else {
      this.participantId = null;
    }
  }

  loadAteliers(): void {
    this.atelierService.getAteliers().subscribe({
      next: (data: Atelier[]) => this.ateliers = data,
      error: (err) => console.error(err),
    });
  }

  registerToAtelier(atelierId: number): void {
    if (!this.participantId) {
      this.message = "Veuillez vous connecter d'abord pour vous inscrire à un atelier.";
      return;
    }

    this.participantService.registerToAtelier(atelierId, this.participantId).subscribe({
      next: () => {
        this.message = "Inscription à l'atelier réussie !";
        this.loadAteliers();
      },
      error: () => {
        this.message = "Erreur lors de l'inscription à l'atelier.";
      }
    });
  }
}
