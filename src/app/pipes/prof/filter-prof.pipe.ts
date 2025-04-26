import { Pipe, PipeTransform } from '@angular/core';
import { Teacher } from '../../models/teacher';

@Pipe({
  name: 'filterProf',
  standalone:true
})
export class FilterProfPipe implements PipeTransform {
  transform(profs: Teacher[], searchText: string): Teacher[] {
    if (!searchText) return profs;

    searchText = searchText.toLowerCase();
    return profs.filter(prof =>
      prof.firstName.toLowerCase().includes(searchText) ||
      prof.lastName.toLowerCase().includes(searchText) ||
      prof.email.toLowerCase().includes(searchText)
    );
  }
}
