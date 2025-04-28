import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParentsService} from '../../../services/parents/parents.service';
import {Parent} from '../../../models/parent';
import {FormsModule} from '@angular/forms';
import {AddParentComponent} from './add-parent/add-parent.component';
import {FilterParentsPipe} from '../../../pipes/parent/filter-parents.pipe';
import {SeeDetailsParentComponent} from './see-details-parent/see-details-parent.component';

@Component({
  selector: 'app-parents',
  imports: [CommonModule,
          FormsModule,
          AddParentComponent,
          FilterParentsPipe,
          SeeDetailsParentComponent
  ],
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
  standalone:true
})
export class ParentsComponent implements OnInit{

  parents :Parent[] = [];
  showAddModal: boolean = false;
  showDetailsModal: boolean = false;
  searchText :string = '';
  selectedParentId: string = '';
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
    this.showAddModal=false;
}

  seeDetailsofParent(parent: Parent) {
    this.selectedParentId = parent.uid;
    this.showDetailsModal = true;
  }

}
