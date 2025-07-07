import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticipantService } from 'src/app/core/services/participant.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  message = '';

  constructor(
    private fb: FormBuilder,
    private participantService: ParticipantService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.participantService.registerParticipant(this.registerForm.value).subscribe({
      next: () => {
        this.message = "Inscription réussie !";
        this.registerForm.reset();
        this.submitted = false;
      },
      error: () => {
        this.message = "Erreur lors de l'inscription.";
      }
    });
  }
}
