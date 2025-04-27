import { Injectable } from '@angular/core';
import { Teacher} from '../../models/teacher';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesseursService {


  private apiUrl = 'assets/json_db/users.json';

 private teachers : Teacher[] = [];

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
        const users = data.users;
        const teachers: Teacher[] = [];

        for (const uid in users) {
          const user = users[uid];
          if (user.role === 'Teacher') {
            const teacher: Teacher = {
              uid: uid,
              firstName: `${user.firstName}`,
              lastName:`${user.lastName}`,
              email : user.email,
              school: user.school,
              grade:user.grade
            };
            teachers.push(teacher);
          }
        }
        this.teachers = teachers;

        return teachers;
      })
    );
  }


  addProfessor(prof: Teacher): void {
    prof.uid = Date.now().toString();
    this.teachers.push(prof);
  }


}
