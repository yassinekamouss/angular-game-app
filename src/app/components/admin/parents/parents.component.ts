import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParentsService} from '../../../services/parents/parents.service';
import {Parent} from '../../../models/parent';
import {FormsModule} from '@angular/forms';
import {AddParentComponent} from './add-parent/add-parent.component';
import {FilterParentsPipe} from '../../../pipes/parent/filter-parents.pipe';

@Component({
  selector: 'app-parents',
  imports: [CommonModule,
          FormsModule,
          AddParentComponent,
          FilterParentsPipe

  ],
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
  standalone:true
})
export class ParentsComponent implements OnInit{

  parents :Parent[] = [];
  showModal: boolean = false;
  searchText :string = '';
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

ajouterParent(parent: Parent){
    this.parentsService.addParent(parent);
    this.showModal=false;
}


}
