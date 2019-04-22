import { Component, OnInit } from '@angular/core';
import { ViewStudentDetailsService } from '../services/view-student-details.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IStudent } from '../interfaces/student';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.css']
})
export class ViewStudentDetailsComponent implements OnInit {

  title = 'Student Details';
  student:IStudent;

  constructor(private _detailsService: ViewStudentDetailsService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    let id = this._route.snapshot.params['id'];
    this.student = this._detailsService.studentDetails(id); 
  }

  onBack(): void {
    this._router.navigate(['/customersList']);
  }

}
