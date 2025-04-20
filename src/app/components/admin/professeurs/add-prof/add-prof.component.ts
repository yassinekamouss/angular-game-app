import { Component, EventEmitter, Output } from '@angular/core';
import { Professeur } from '../../../../models/professeur';
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
  newProf: Professeur = {
    id: 0,
    nom: '',
    prenom: '',
    email: ''
  };

  @Output() ajouter = new EventEmitter<Professeur>();
  @Output() fermer = new EventEmitter<void>();

  submitForm() {
    if (this.newProf.nom && this.newProf.prenom && this.newProf.email) {
      this.ajouter.emit(this.newProf);
    }
  }

  closeModal() {
    this.fermer.emit();
  }




}
