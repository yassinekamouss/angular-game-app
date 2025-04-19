import { Injectable } from "@angular/core";
import { Auth, user } from "@angular/fire/auth";
import { 
  browserSessionPersistence,
  setPersistence, 
  signInWithEmailAndPassword, 
  signOut, 
  User 
} from "firebase/auth";
import { from, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.setSessionStoragePersistence();
    this.user$ = user(this.auth);
  }

  private setSessionStoragePersistence(): void {
    setPersistence(this.auth, browserSessionPersistence);
  }

  login(email: string, password: string): Observable<User | null> {
    return from(
      signInWithEmailAndPassword(this.auth, email, password)
        .then((cred) => {
          console.log('Login successful:', cred.user);
          return cred.user;
        })
        .catch((err) => {
          console.error('Login failed:', err.message);
          throw err;
        })
    );
  }

  logout(): Observable<void> {
    return from(
      signOut(this.auth).then(() => sessionStorage.clear())
    );
  }
  
}
