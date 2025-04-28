import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent } from '../../../../models/parent';
import { ParentsService } from '../../../../services/parents/parents.service';

@Component({
  selector: 'app-see-details-parent',
  imports: [CommonModule],
  templateUrl: './see-details-parent.component.html',
  styleUrls: ['./see-details-parent.component.css'],
  standalone: true
})
export class SeeDetailsParentComponent implements OnInit {
  @Input() parentId: string = '';
  @Output() fermer = new EventEmitter<void>();

  parent: Parent | undefined;

  constructor(private parentsService: ParentsService) {}

  ngOnInit(): void {
    if (this.parentId) {
      this.parent = this.parentsService.seeDetailsOfParent(this.parentId);
      console.log('Parent details:', this.parent);
    }
  }

  closeModal(): void {
    this.fermer.emit();
  }
}
