import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {IStudent} from '../interfaces/student';
import { AddStudentService } from '../services/add-student.service';
import { ActivatedRoute } from '@angular/router';
import { ViewStudentDetailsService } from '../services/view-student-details.service';
import { UpdateStudentDetailsService } from '../services/update-student-details.service';
import { IDocument } from '../interfaces/documents';
import { GetDocumentService } from '../services/get-documents.service';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent implements OnInit {
  student:IStudent = {};
  documents:IDocument = {};
  title = 'Register New Student';
  id: number
  uid:number;

  constructor(private _addStudentService: AddStudentService, private _route: ActivatedRoute,
                 private _updateServie: UpdateStudentDetailsService,private _detailsService: ViewStudentDetailsService,
                 private _documentsService: GetDocumentService) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
    if (this.id){
      this.student = this._detailsService.studentDetails(this.id);
      this.onCategoryChange(this.student.category); 
    }
  }

  onCategoryChange(category:string): void{
    if (category == 'Domestic'){
      this._documentsService.getDomesticDocuments().subscribe(data => {
        this.documents = data;
      });  
    }else if (category == 'International'){
      this._documentsService.getInternationalDocuments().subscribe(data => {
        this.documents = data;
      });
    }
  }

  submitForm(f: NgForm): void{
    this.student.studentName = f.value.studentName;
    this.student.fatherName = f.value.fatherName;
    this.student.motherName = f.value.motherName;
    this.student.category = f.value.category;
    this.student.declaration = f.value.declaration;
    this.student.dob = f.value.dob;
    this.student.domicile = f.value.domicile;
    this.student.birthCertificate = f.value.birthCertificate;
    this.student.lastClassScore = f.value.lastClassScore;
    this.student.marksheets = f.value.marksheets;
    this.student.passport = f.value.passport;
    this.student.policeClearance = f.value.policeClearance;

    if (!this.id){
      this.uid = Math.floor((Math.random())+1);
      this.student.id = this.uid;
      this._addStudentService.create(this.student);
    }
    else{
      this.student.id = this.id;
      this._updateServie.updateStudent(this.id, this.student);
    }   
  }
}
