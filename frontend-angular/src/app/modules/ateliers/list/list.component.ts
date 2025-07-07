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

  toastMessage: string | null = null;
  toastColor: string = '#5CE65C';

  showPopup = false;
  popupParticipants: any[] = [];
  registeredAteliersArray: number[] = [];

  maxParticipants = 20;

  constructor(
    private atelierService: AtelierService,
    private participantService: ParticipantService
  ) {}

  ngOnInit(): void {
    this.loadLoggedUser();    
    this.loadAteliers();
    const registered = localStorage.getItem('user');
    if (registered) {
      try {
        this.registeredAteliersArray = JSON.parse(registered);
      } catch (e) {
        console.error('Invalid localStorage data');
        this.registeredAteliersArray = [];
      }
    }
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
      next: (data: Atelier[]) => {
        this.ateliers = data.map(atelier => ({
          ...atelier,
          isRegistered: atelier.participants?.some(participant => participant.id === this.participantId) || false
        }));
      },
      error: (err) => console.error(err),
    });
  }

  registerToAtelier(atelierId: number): void {
    if (!this.participantId) {
      this.showToast("Veuillez vous connecter d'abord pour vous inscrire à un atelier.");
      return;
    }

    this.participantService.registerToAtelier(atelierId, this.participantId).subscribe({
      next: () => {
        this.showToast("Inscription à l'atelier réussie !");
        this.loadAteliers();
      },
      error: () => {
        this.showToast("Erreur lors de l'inscription à l'atelier.");
      }
    });
  }

  getRandomColor(seed: number): string {
    const colors = [
      '#a8dadc', '#f4a261', '#e76f51', '#2a9d8f', '#264653', '#f4d35e'
    ];
    return colors[seed % colors.length];
  }

  getParticipantProgress(atelier: Atelier): number {
    if (!atelier.participants) return 0;
    const count = atelier.participants.length;
    return Math.min(100, (count / this.maxParticipants) * 100);
  }

  showToast(message: string): void {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }

  openParticipantsPopup(participants: any[]): void {
    this.popupParticipants = participants;
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }

  isUserRegistered(atelierId: number): boolean {
    return this.registeredAteliersArray.includes(atelierId);
  }
}
