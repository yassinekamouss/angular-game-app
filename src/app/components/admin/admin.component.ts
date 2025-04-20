// components/admin/admin.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {ClassesService} from '../../services/classes/classes.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  constructor(
    private authService: AuthService,
    private router: Router,
    private classesService: ClassesService
  ) {}

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout failed:', err.message);
      }
    });
  }

  getClasses() {
    this.classesService.getClasses().subscribe({
      next: (classes) => {
        console.log('Classes loaded in admin component:', classes);
      },
      error: (err) => {
        console.error('Error loading classes:', err);
      }
    });
  }
}
