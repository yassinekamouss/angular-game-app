import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StudentService} from '../../../services/student/student.service';
import {Student} from '../../../models/student';
import {AdminAddStudentsComponent} from './admin-add-students/admin-add-students.component';
import {FilterStudentPipe} from '../../../pipes/student/filter-student.pipe';
import {SeeDetailsStudentComponent} from './see-details-student/see-details-student.component';
@Component({
  selector: 'app-admin-students',
  imports: [
    AdminAddStudentsComponent,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    FilterStudentPipe,
    SeeDetailsStudentComponent
  ],
  templateUrl: './admin-students.component.html',
  styleUrl: './admin-students.component.css',
  standalone:true
})
export class AdminStudentsComponent implements OnInit{
   students:Student[] = [];
   searchText :string ='';
   showAddModal: boolean = false;
   showDetailsModal: boolean = false;
   selectedStudentId: string ='';
  constructor(private studentService : StudentService) {
  }
  ngOnInit() {
    this.studentService.getStudents().subscribe({
      next:(students :Student[]) =>{
        this.students = students;
        console.log('Classes loaded:', this.students);
      },
      error: (err) => {
        console.error('Error loading classes:', err);
      }

    })
  }

  addStudent(student: Student){
    this.studentService.addStudent(student);
    this.showAddModal=false;
  }


  seeStudentDetails(student:Student){
    this.selectedStudentId = student.id;
    this.showDetailsModal = true;
  }

}
