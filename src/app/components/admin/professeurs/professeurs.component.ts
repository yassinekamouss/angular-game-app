import {Component, OnInit} from '@angular/core';
import {ProfesseursService} from '../../../services/professeurs/professeurs.service';
import {Teacher} from '../../../models/teacher';
import {NgForOf, NgIf} from '@angular/common';
import {AddProfComponent} from './add-prof/add-prof.component';
import {FormsModule} from '@angular/forms';
import {FilterProfPipe} from '../../../pipes/prof/filter-prof.pipe';

@Component({
  selector: 'app-professeurs',
  imports: [
    NgForOf,
    NgIf,
    AddProfComponent,
    FormsModule,
    FilterProfPipe
  ],
  templateUrl: './professeurs.component.html',
  styleUrl: './professeurs.component.css',
  standalone:true
})
export class ProfesseursComponent implements OnInit{
  professeurs :Teacher[] = [];
  showModal: boolean = false;
  searchText: string = '';

  constructor(private professeurService : ProfesseursService) {

  }

  ngOnInit() {
    this.professeurService.getTeachers().subscribe({
      next:(professeurs : Teacher[]) =>{
        this.professeurs =professeurs;
        console.log('Classes loaded:', this.professeurs);
      },
      error: (err) => {
        console.error('Error loading classes:', err);
      }
    })
  }
  ajouterProfesseur(prof: Teacher) {
    this.professeurService.addProfessor(prof);
    this.showModal = false;
  }

}
