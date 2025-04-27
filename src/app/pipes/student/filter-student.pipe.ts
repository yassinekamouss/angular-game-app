import { Pipe, PipeTransform } from '@angular/core';
import {Student} from '../../models/student';

@Pipe({
  name: 'filterStudent',
  standalone:true
})
export class FilterStudentPipe implements PipeTransform {

  transform(students: Student[], searchText: string): Student[] {
    if (!searchText) return students;

    searchText = searchText.toLowerCase();
    return students.filter(student =>
      student.name.toLowerCase().includes(searchText) ||
      student.schoolGrade.toLowerCase().includes(searchText)
    );
  }

}
