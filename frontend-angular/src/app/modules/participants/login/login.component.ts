import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticipantService } from 'src/app/core/services/participant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private participantService: ParticipantService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.participantService.login(this.loginForm.value).subscribe({
      next: (res) => {
        localStorage.setItem('user', JSON.stringify(res.user || res));
        this.router.navigate(['/ateliers']); 
      },
      error: (err) => {
        this.errorMessage = 'Login failed. Check your credentials.';
        console.error(err);
      },
    });
  }
}
