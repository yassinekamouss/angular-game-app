import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesService } from '../../../services/classes/classes.service';
import { Classe } from '../../../models/classe';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes: Classe[] = [];
  
  constructor(private classesService: ClassesService) {}

  ngOnInit(): void {
    this.classesService.getClasses().subscribe({
      next: (classes) => {
        this.classes = classes;
        console.log('Classes loaded:', this.classes);
      },
      error: (err) => {
        console.error('Error loading classes:', err);
      }
    });
  }
}
