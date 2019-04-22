import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/student';
import { GetStudentService } from './get-student.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeleteStudentService {

  students: IStudent[];
  updatedStudents: IStudent[];
  index: number;

  constructor(private _dataService: GetStudentService, private _router: Router) { }

  deleteStudent(studentId: number): void{
    this.students = this._dataService.getStudentsList();
    this.updatedStudents = [];
    this.index = 0;
    if(this.students.length > 1)
    {
      while(this.students[this.index])
      {
          if(studentId != +this.students[this.index].id){
              this.updatedStudents.push(this.students[this.index]);
          }
          this.index++;    
      }

      localStorage.setItem("studentsList", JSON.stringify(this.updatedStudents));
    }
    else
    {
      localStorage.removeItem("studentsList");
    }  
  }
}
