import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Parent } from '../../../../models/parent';
import { Student } from '../../../../models/student';
import { StudentService } from '../../../../services/student/student.service';

@Component({
  selector: 'app-add-parent',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add-parent.component.html',
  styleUrl: './add-parent.component.css',
  standalone: true
})
export class AddParentComponent implements OnInit {
  // Le model du nouveau parent
  newParent: Parent = {
    uid: "0",
    firstName: '',
    lastName: '',
    email: '',
    linkedStudentIds: []
  };

  // Variables pour la gestion des étapes
  currentStep = 1;

  // Variables pour la gestion des étudiants
  allStudents: Student[] = [];
  filteredStudents: Student[] = [];
  selectedStudents: Student[] = [];
  studentSearchText = '';

  @Output() ajouter = new EventEmitter<Parent>();
  @Output() fermer = new EventEmitter<void>();

  constructor(private studentsService: StudentService) {}

  ngOnInit() {
    // Charger la liste des étudiants
    this.studentsService.getStudents().subscribe({
      next: (students) => {
        this.allStudents = students;
        this.filteredStudents = [...this.allStudents];
      },
      error: (err) => {
        console.error('Erreur lors du chargement des étudiants:', err);
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
    return this.newParent.firstName.trim() !== '' &&
      this.newParent.lastName.trim() !== '' &&
      this.newParent.email.trim() !== '';
  }

  // Gestion des étudiants
  filterStudents() {
    if (!this.studentSearchText) {
      this.filteredStudents = [...this.allStudents];
    } else {
      const searchTerm = this.studentSearchText.toLowerCase();
      this.filteredStudents = this.allStudents.filter(student =>
        student.name.toLowerCase().includes(searchTerm)
      );
    }
  }

  toggleStudent(student: Student) {
    const index = this.selectedStudents.findIndex(s => s.id === student.id);
    if (index === -1) {
      // Si l'étudiant n'est pas sélectionné, on l'ajoute
      this.selectedStudents.push(student);
    } else {
      // Sinon on le retire
      this.removeStudent(student);
    }
  }

  removeStudent(student: Student) {
    const index = this.selectedStudents.findIndex(s => s.id === student.id);
    if (index !== -1) {
      this.selectedStudents.splice(index, 1);
    }
  }

  isStudentSelected(student: Student): boolean {
    return this.selectedStudents.some(s => s.id === student.id);
  }

  // Soumission du formulaire final
  submitForm() {
    if (this.isStep1Valid() && this.selectedStudents.length > 0) {
      // Ajouter les IDs des étudiants sélectionnés au parent
      this.newParent.linkedStudentIds = this.selectedStudents.map(student => student.id);
      this.ajouter.emit(this.newParent);
    }
  }

  closeModal() {
    this.fermer.emit();
  }
}
