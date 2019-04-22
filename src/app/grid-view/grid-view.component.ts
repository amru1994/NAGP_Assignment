import { Component, OnInit } from '@angular/core';
import {GetStudentService} from '../services/get-student.service'
import { IStudent } from '../interfaces/student';
import { DeleteStudentService } from '../services/delete-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})

export class GridViewComponent implements OnInit {

  title: string = 'Students List';
  students: IStudent[] = [];
  searchText: string;
  filteredStudents: IStudent[] = [];
  categories: string[] = ['All', 'International', 'Domestic'];
  selectedCategory: string = 'All';

  constructor(private _dataService:GetStudentService, private _deleteService: DeleteStudentService, private _router: Router) { }

  ngOnInit() {
    if ( window.localStorage.getItem( "studentsList" ) ) {
      this.students = JSON.parse( window.localStorage.getItem( "studentsList" ) );
    }
    else {
      this._dataService.getStudents().subscribe(data => {
        this.students = data;
        window.localStorage.setItem("studentsList", JSON.stringify(data));
      });      
    } 
    
    this.onCategoryChange(this.selectedCategory);
  }

  onCategoryChange(category: string){
    if (category == 'All'){
      this.filteredStudents = this.students;
    }
    else{
      this.filteredStudents = this.students.filter(x => x.category == category);
    }    
  }

  deleteStudent(id:number){
    if(confirm("Are you sure to delete the student")) {
      this._deleteService.deleteStudent(id);
      this.ngOnInit();
    }
  }
}
