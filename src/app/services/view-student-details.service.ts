import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/student';
import {GetStudentService} from '../services/get-student.service'

@Injectable({
  providedIn: 'root'
})
export class ViewStudentDetailsService {

  students: IStudent[];
  index: number;

  constructor(private _dataService:GetStudentService) { }

  studentDetails(id: number){      
    this.students = this._dataService.getStudentsList();
    this.index = 0;
    
    while(this.students[this.index])
    {
        if(id == +this.students[this.index].id){
            return this.students[this.index];
        }

        this.index++;    
    }
  }
}
