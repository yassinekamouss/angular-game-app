import { Pipe, PipeTransform } from '@angular/core';
import {Parent} from '../../models/parent';

@Pipe({
  name: 'filterParents',
  standalone:true
})
export class FilterParentsPipe implements PipeTransform {

  transform(parents:Parent[] , searchText:string): Parent[] {
    if (!searchText) return parents;

    searchText = searchText.toLowerCase();
    return parents.filter(parent =>
      parent.firstName.toLowerCase().includes(searchText) ||
      parent.lastName.toLowerCase().includes(searchText) ||
      parent.email.toLowerCase().includes(searchText)
    );

  }

}
