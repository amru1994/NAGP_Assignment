import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridViewComponent } from './grid-view/grid-view.component'
import { AddNewStudentComponent } from './add-new-student/add-new-student.component'
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';

const routes: Routes = [
  {
    path : '', redirectTo: 'studentsList', pathMatch: 'full'
  },
  {
    path : 'studentsList', component: GridViewComponent
  },
  {
    path : 'studentDetails/:id', component: ViewStudentDetailsComponent
  },
  {
    path : 'editStudentDetails/:id', component: AddNewStudentComponent
  },
  {
    path : 'addNewStudent', component: AddNewStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
