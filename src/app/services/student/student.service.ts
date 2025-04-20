import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Student } from '../../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'assets/json_db/users.json';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
        const users = data.users;
        const students: Student[] = [];

        for (const uid in users) {
          const user = users[uid];
          if (user.role === 'Student') {
            const student: Student = {
              id: parseInt(uid.replace(/\D/g, '')) || 0,
              name: `${user.firstName} ${user.lastName}`,
              schoolGrade: user.schoolGrade?.toString() ?? '',
              mathLevel: 'Intermédiaire', // par défaut
              birthDate: user.birthday,
              linkedTeacherId: user.linkedTeacherId
            };
            students.push(student);
          }
        }

        return students;
      })
    );
  }

  getStudentsByTeacherId(teacherId: string): Observable<Student[]> {
    return this.getStudents()
            .pipe(
              map(students => students.filter(student => student.linkedTeacherId === teacherId))
            );
  }
}
