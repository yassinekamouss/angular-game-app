import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student/student.service';
import { TeacherService, Teacher } from '../../../services/teacher/teacher.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})

export class StudentsComponent implements OnInit{
  students: Student[] = [] ;
  teacher: Teacher | null = null;
  teacherId: string = 'uid_789'; // id de l'enseignant connecté

  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(){
    // Charger les informations du professeur
    this.teacherService.getTeacherById(this.teacherId).subscribe({
      next: (teacher) => {
        this.teacher = teacher;
      },
      error: (err) => {
        console.error('Error loading teacher:', err);
      }
    });

    // Charger les élèves
    this.studentService.getStudentsByTeacherId(this.teacherId)
    .subscribe({
      next: (students) => {
        this.students = students;
        console.log(this.students);
      },
      error: (err) => {
        console.error('Error loading students:', err);
      }
    });
  }


}
