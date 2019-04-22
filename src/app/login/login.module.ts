import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [UserLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
