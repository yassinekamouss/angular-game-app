import { Component } from '@angular/core';
import {NgModel} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-parents',
  imports: [CommonModule],
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
  standalone:true
})
export class ParentsComponent  {
  parents : any=[
    {
      id: 'parent1',
      nom: 'Karim',
      prenom: 'Samira',
      email: 'samira.karim@example.com',
      enfants: [
        { nom: 'Ali', prenom: 'Karim', classe: 'CE1' },
        { nom: 'Nora', prenom: 'Karim', classe: 'CE2' }
      ]
    },
    {
      id: 'parent2',
      nom: 'Bennani',
      prenom: 'Hicham',
      email: 'hicham.bennani@example.com',
      enfants: [
        { nom: 'Yassine', prenom: 'Bennani', classe: 'CE2' }
      ]
    },
    {
      id: 'parent3',
      nom: 'Alaoui',
      prenom: 'Fatima',
      email: 'fatima.alaoui@example.com',
      enfants: [
        { nom: 'Meryem', prenom: 'Alaoui', classe: 'CM1' }
      ]
    }
 ];


  constructor() {
  }

  listParents(){

  }
}
