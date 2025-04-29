import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Student} from '../../../../models/student';
import {StudentService} from '../../../../services/student/student.service';

@Component({
  selector: 'app-see-details-student',
  imports: [
      NgIf
  ],
  templateUrl: './see-details-student.component.html',
  styleUrl: './see-details-student.component.css',
  standalone:true
})
export class SeeDetailsStudentComponent implements OnInit{

  @Input() studentId: string = '';
  @Output() fermer = new EventEmitter<void>();

  student: Student | undefined;

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
   if(this.studentId)
   this.student = this.studentService.seeStudentDetails(this.studentId);
  }
  closeModal(): void {
    this.fermer.emit();
  }
}
