import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../../../../models/student';
import { Teacher } from '../../../../models/teacher';
import { ProfesseursService } from '../../../../services/professeurs/professeurs.service';

@Component({
  selector: 'app-admin-add-students',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './admin-add-students.component.html',
  styleUrl: './admin-add-students.component.css',
  standalone: true
})
export class AdminAddStudentsComponent implements OnInit {
  // Le model du nouvel étudiant
  newStudent: Student = {
    id: "0",
    name: '',
    schoolGrade: '',
    mathLevel: '',
    birthDate: '',
    linkedTeacherId: ''
  };

  // Variables pour la gestion des étapes
  currentStep = 1;

  // Variables pour la gestion des enseignants
  teachers: Teacher[] = [];
  filteredTeachers: Teacher[] = [];
  selectedTeacher: Teacher | null = null;
  teacherSearchText = '';

  @Output() ajouter = new EventEmitter<Student>();
  @Output() fermer = new EventEmitter<void>();

  constructor(private professeurService: ProfesseursService) {}

  ngOnInit() {
    // Charger la liste des enseignants
    this.professeurService.getTeachers().subscribe({
      next: (professeurs: Teacher[]) => {
        this.teachers = professeurs;
        this.filteredTeachers = [...this.teachers];
        console.log('Enseignants chargés:', this.teachers);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des enseignants:', err);
      }
    });
  }

  // Navigation entre les étapes
  nextStep() {
    if (this.isStep1Valid()) {
      this.currentStep = 2;
    }
  }

  previousStep() {
    this.currentStep = 1;
  }

  // Validation du formulaire étape 1
  isStep1Valid(): boolean {
    return this.newStudent.name.trim() !== '' &&
      this.newStudent.birthDate.trim() !== '' &&
      this.newStudent.schoolGrade.trim() !== '' &&
      this.newStudent.mathLevel.trim() !== '';
  }

  // Gestion des enseignants
  filterTeachers() {
    if (!this.teacherSearchText) {
      this.filteredTeachers = [...this.teachers];
    } else {
      const searchTerm = this.teacherSearchText.toLowerCase();
      this.filteredTeachers = this.teachers.filter(teacher =>
        teacher.firstName.toLowerCase().includes(searchTerm) ||
        teacher.lastName.toLowerCase().includes(searchTerm)
      );
    }
  }

  selectTeacher(teacher: Teacher) {
    this.selectedTeacher = teacher;
    this.newStudent.linkedTeacherId = teacher.uid;
  }

  removeTeacher() {
    this.selectedTeacher = null;
    this.newStudent.linkedTeacherId = '';
  }

  isTeacherSelected(teacher: Teacher): boolean {
    return this.selectedTeacher?.uid === teacher.uid;
  }

  // Soumission du formulaire final
  submitForm() {
    if (this.isStep1Valid() && this.selectedTeacher) {
      this.ajouter.emit(this.newStudent);
    }
  }

  closeModal() {
    this.fermer.emit();
  }
}
