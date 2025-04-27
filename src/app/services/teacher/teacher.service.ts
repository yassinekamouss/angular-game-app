import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  grade: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'assets/json_db/users.json';

  constructor(private http: HttpClient) {}




  getTeacherById(teacherId: string): Observable<Teacher> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
        const teacher = data.users[teacherId];
        if (teacher && teacher.role === 'Teacher') {
          return {
            id: teacher.uid,
            name: `${teacher.firstName} ${teacher.lastName}`,
            subject: 'Mathématiques',
            grade: '6ème' // Pour l'instant en dur, à remplacer par la vraie donnée
          };
        }
        throw new Error('Teacher not found');
      })
    );
  }
}
