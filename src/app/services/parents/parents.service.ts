import { Injectable } from '@angular/core';
import {Parent} from '../../models/parent';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {

  private parents: Parent[] =[
    {
      id: 'parent1',
      nom: 'Karim',
      prenom: 'Samira',
      email: 'samira.karim@example.com',
      enfants: [
        { nom: 'Ali', prenom: 'Karim', classe: 'CE1' ,profId :"1" },
        { nom: 'Nora', prenom: 'Karim', classe: 'CE2',profId :"1" }
      ]
    },
    {
      id: 'parent2',
      nom: 'Bennani',
      prenom: 'Hicham',
      email: 'hicham.bennani@example.com',
      enfants: [
        { nom: 'Yassine', prenom: 'Bennani', classe: 'CE2',profId :"1" }
      ],

    },
    {
      id: 'parent3',
      nom: 'Alaoui',
      prenom: 'Fatima',
      email: 'fatima.alaoui@example.com',
      enfants: [
        { nom: 'Meryem', prenom: 'Alaoui', classe: 'CM1' ,profId :"1"}
      ]
    }
  ];

  constructor() { }

  getParents():Observable<Parent[]>{
    return of(this.parents);
  }

}
