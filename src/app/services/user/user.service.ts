import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Database, ref, set, get, remove, update, query, orderByChild, equalTo } from '@angular/fire/database';
import { Observable, from, map, switchMap, of } from 'rxjs';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  role: 'student' | 'teacher' | 'administrator' | 'parent' | 'principal';
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private auth: Auth,
    private db: Database
  ) {}

  // Création d'un utilisateur par un administrateur ou un enseignant
  createUser(email: string, password: string, userData: Partial<User>): Observable<User> {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
      .pipe(
        switchMap(credentials => {
          const uid = credentials.user.uid;
          const user: User = {
            uid,
            email,
            displayName: userData.displayName || email.split('@')[0],
            role: userData.role || 'student',
            createdAt: Date.now(),
          };

          return from(set(ref(this.db, `users/${uid}`), user))
            .pipe(map(() => user));
        })
      );
  }

  // Récupérer tous les utilisateurs (pour l'administrateur)
  getAllUsers(): Observable<User[]> {
    const usersRef = ref(this.db, 'users');
    return from(get(usersRef)).pipe(
      map(snapshot => {
        if (snapshot.exists()) {
          const users: User[] = [];
          snapshot.forEach(childSnapshot => {
            users.push(childSnapshot.val() as User);
          });
          return users;
        }
        return [];
      })
    );
  }

  // Récupérer les utilisateurs par rôle
  getUsersByRole(role: string): Observable<User[]> {
    const usersRef = ref(this.db, 'users');
    const roleQuery = query(usersRef, orderByChild('role'), equalTo(role));

    return from(get(roleQuery)).pipe(
      map(snapshot => {
        if (snapshot.exists()) {
          const users: User[] = [];
          snapshot.forEach(childSnapshot => {
            users.push(childSnapshot.val() as User);
          });
          return users;
        }
        return [];
      })
    );
  }

  // Mettre à jour un utilisateur
  updateUser(uid: string, userData: Partial<User>): Observable<void> {
    const userRef = ref(this.db, `users/${uid}`);
    return from(update(userRef, userData));
  }

  // Supprimer un utilisateur
  deleteUser(uid: string): Observable<void> {
    const userRef = ref(this.db, `users/${uid}`);
    return from(remove(userRef));
  }

  // Récupérer un utilisateur par son ID
  getUserById(uid: string): Observable<User | null> {
    const userRef = ref(this.db, `users/${uid}`);
    return from(get(userRef)).pipe(
      map(snapshot => {
        if (snapshot.exists()) {
          return snapshot.val() as User;
        }
        return null;
      })
    );
  }
}
