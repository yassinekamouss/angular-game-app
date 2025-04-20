import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ParentsService} from '../../../services/parents/parents.service';
import {Parent} from '../../../models/parent';

@Component({
  selector: 'app-parents',
  imports: [CommonModule],
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
  standalone:true
})
export class ParentsComponent implements OnInit{

parents :Parent[] = [];
  constructor(private parentsService: ParentsService) {
  }
ngOnInit() {
  this.parentsService.getParents().subscribe({
    next: (parents) => {
      this.parents = parents;
      console.log('Classes loaded:', this.parents);
    },
    error: (err) => {
      console.error('Error loading classes:', err);
    }
  });
}

}
