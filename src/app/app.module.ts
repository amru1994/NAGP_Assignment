import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    AddNewStudentComponent,
    ViewStudentDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
