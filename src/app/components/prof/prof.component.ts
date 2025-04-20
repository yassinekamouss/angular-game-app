import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ClassesService } from '../../services/classes/classes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prof',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})

export class ProfComponent {
  constructor(
    private authService: AuthService, 
    private router: Router,
    private classesService: ClassesService
  ) {}
  
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout failed:', err.message);
      },
    });
  }

}