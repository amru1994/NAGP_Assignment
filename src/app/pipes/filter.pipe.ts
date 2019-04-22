import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from '../interfaces/student';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(students: IStudent[], searchText: string): IStudent[] {
    if(!students) return [];
    if(!searchText) return students;
    searchText = searchText.toLowerCase();
    
    return students.filter( st => {
      return st.studentName.toLowerCase().includes(searchText);
    });
   }
}