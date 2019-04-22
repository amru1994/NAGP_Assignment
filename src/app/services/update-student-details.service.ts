import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/student';
import { Router } from '@angular/router';
import { GetStudentService } from './get-student.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentDetailsService {
  
  students: IStudent[];
  index: number;

constructor(private _router: Router, private _dataService: GetStudentService) { }

updateStudent(studentId: number, student:IStudent){
    
    this.students = this._dataService.getStudentsList();
    this.index = 0;

    while(this.students[this.index])
    {
        if(studentId == +this.students[this.index].id){
            this.students[this.index] = student;
        }
        this.index++;    
    }

    localStorage.setItem( "studentsList", JSON.stringify( this.students ) );
  
    this._router.navigate( ['/studentsList'] );
     
}
}
