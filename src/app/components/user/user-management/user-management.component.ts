import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserService } from '../../../services/user/user.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;
  loading = false;
  message = '';
  isError = false;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      displayName: [''],
      role: ['student', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.userService.getAllUsers()
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (users) => {
          this.users = users;
        },
        error: (err) => {
          this.message = `Erreur lors du chargement des utilisateurs: ${err.message}`;
          this.isError = true;
        }
      });
  }

  createUser(): void {
    if (this.userForm.invalid) return;

    const { email, password, displayName, role } = this.userForm.value;

    this.loading = true;
    this.message = '';
    this.isError = false;

    this.userService.createUser(email, password, { displayName, role })
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (user) => {
          this.message = `Utilisateur ${user.email} créé avec succès!`;
          this.userForm.reset({ role: 'student' });
          this.loadUsers(); // Recharger la liste
        },
        error: (err) => {
          this.message = `Erreur lors de la création: ${err.message}`;
          this.isError = true;
        }
      });
  }

  deleteUser(user: User): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer ${user.email}?`)) {
      this.userService.deleteUser(user.uid)
        .subscribe({
          next: () => {
            this.message = `Utilisateur ${user.email} supprimé avec succès!`;
            this.loadUsers();
          },
          error: (err) => {
            this.message = `Erreur lors de la suppression: ${err.message}`;
            this.isError = true;
          }
        });
    }
  }
}
