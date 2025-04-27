import { Component, EventEmitter, Output } from '@angular/core';
import { Teacher } from '../../../../models/teacher';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-prof',
  imports: [
    FormsModule
  ],
  templateUrl: './add-prof.component.html',
  styleUrl: './add-prof.component.css',
  standalone:true
})
export class AddProfComponent {
  newProf: Teacher = {
    uid: "0",
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    grade:''
  };

  @Output() ajouter = new EventEmitter<Teacher>();
  @Output() fermer = new EventEmitter<void>();

  submitForm() {
    if (this.newProf.firstName && this.newProf.lastName
      && this.newProf.email && this.newProf.grade) {
      this.ajouter.emit(this.newProf);
    }
  }

  closeModal() {
    this.fermer.emit();
  }

}
