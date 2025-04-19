import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  imports: [FormsModule, CommonModule, RouterModule],
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  errorMessage: string = '';
  isAlertVisible: boolean = false;
  alertMessage: string = '';

  constructor(private authService: AuthService) {}

  onResetPassword() {
    if (!this.email) {
      this.errorMessage = 'Veuillez entrer votre adresse e-mail';
      return;
    }

    this.authService.resetPassword(this.email).subscribe({
      next: () => {
        this.alertMessage = 'Un lien de réinitialisation a été envoyé à votre adresse e-mail.';
        this.isAlertVisible = true;
        this.errorMessage = '';

        // Masquer l'alerte après 8 secondes
        setTimeout(() => {
          this.isAlertVisible = false;
        }, 8000);
      },
      error: (err) => {
        this.errorMessage = err.message;
      }
    });
  }

  closeAlert() {
    this.isAlertVisible = false;
  }
}
