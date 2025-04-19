import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Classe } from '../../models/classe';


@Injectable({
  providedIn: 'root'
})

export class ClassesService {
  private classes: Classe[] = [
    {
      id: 1,
      name: '6ème A',
      level: '6ème',
      numberOfStudents: 25,
      subject: 'Mathématiques'
    },
    {
      id: 2,
      name: '5ème B',
      level: '5ème',
      numberOfStudents: 28,
      subject: 'Mathématiques'
    },
    {
      id: 3,
      name: '4ème C',
      level: '4ème',
      numberOfStudents: 30,
      subject: 'Mathématiques'
    }
  ];

  constructor() { }

  getClasses(): Observable<Classe[]> {
    // Récuperer tous les classes 
    // s'il sagit d'un professeur , filtrer les classes en fonction de l'id du professeur
    return of(this.classes);
  }

  // getClassesByProfId(profId: number): Observable<Classe[]> {
  //   // Récuperer les classes d'un professeur en fonction de son id
  //   return of(this.classes.filter(c => c.profId === profId));
  // }
}