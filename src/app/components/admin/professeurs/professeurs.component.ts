import {Component, OnInit} from '@angular/core';
import {ProfesseursService} from '../../../services/professeurs/professeurs.service';
import {Professeur} from '../../../models/professeur';
import {NgForOf, NgIf} from '@angular/common';
import {AddProfComponent} from './add-prof/add-prof.component';

@Component({
  selector: 'app-professeurs',
  imports: [
    NgForOf,NgIf,AddProfComponent
  ],
  templateUrl: './professeurs.component.html',
  styleUrl: './professeurs.component.css',
  standalone:true
})
export class ProfesseursComponent implements OnInit{
  professeurs :Professeur[] = [];
  showModal: boolean = false;
  constructor(private professeurService : ProfesseursService) {

  }

  ngOnInit() {
    this.professeurService.getProfessors().subscribe({
      next:(professeurs : Professeur[]) =>{
        this.professeurs =professeurs;
        console.log('Classes loaded:', this.professeurs);
      },
      error: (err) => {
        console.error('Error loading classes:', err);
      }
    })
  }
  ajouterProfesseur(prof: Professeur) {
    this.professeurService.addProfessor(prof);
    this.showModal = false;
  }

}
