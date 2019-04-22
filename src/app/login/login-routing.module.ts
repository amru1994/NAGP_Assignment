import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component'

// @Routes login module routes
const loginRoutes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class LoginRoutingModule { }