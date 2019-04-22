import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { IStudent } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {
  students : IStudent[] = [];

  constructor( private _router: Router ) { }

  create( student:IStudent) {
      if ( window.localStorage.getItem( "studentsList" ) ) {
          this.students = JSON.parse( window.localStorage.getItem( "studentsList" ) );
          this.students.push( student );
      }
      else {
          this.students.push( student );
      }

      localStorage.setItem( "studentsList", JSON.stringify( this.students ) );

      this._router.navigate( [''] );
  }
}
