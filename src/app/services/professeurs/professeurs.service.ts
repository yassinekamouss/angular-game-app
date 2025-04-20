import { Injectable } from '@angular/core';
import {Professeur} from '../../models/professeur';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesseursService {

  professeurs : Professeur[]= [
    {
      id: 1,
      nom: 'El Amrani',
      prenom: 'Khalid',
      email: 'khalid.elamrani@ecole.com'
    },
    {
      id: 2,
      nom: 'Bouzid',
      prenom: 'Leila',
      email: 'leila.bouzid@ecole.com'
    },
    {
      id: 3,
      nom: 'Naciri',
      prenom: 'Omar',
      email: 'omar.naciri@ecole.com'
    },
    {
      id: 4,
      nom: 'Haddad',
      prenom: 'Salma',
      email: 'salma.haddad@ecole.com'
    },
    {
      id: 5,
      nom: 'Tazi',
      prenom: 'Youssef',
      email: 'youssef.tazi@ecole.com'
    }
  ];

    getProfessors():Observable<Professeur[]>{
      return of(this.professeurs);
  }


  addProfessor(prof: Professeur): void {
    const newId = Math.max(...this.professeurs.map(p => p.id)) + 1;
    prof.id = newId;
    this.professeurs.push(prof);
  }

  constructor() { }
}
