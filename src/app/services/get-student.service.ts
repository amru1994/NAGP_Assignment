import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {IStudent} from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})

export class GetStudentService {

  students:IStudent[];

  private _dataUrl = '/NAGP_Assignment/assets/JSON/student-list.json' ;

  constructor(private _http: HttpClient) { }

  getStudents(): Observable<IStudent[]> {
    return this._http.get<IStudent[]>(this._dataUrl);
  }

  getStudentsList() {     
    return this.students = JSON.parse( window.localStorage.getItem( "studentsList" ) );
  }

}
