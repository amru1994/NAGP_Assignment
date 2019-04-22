import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private _authService: AuthenticationService) { }

  ngOnInit() {
  }

  loginUser(f: NgForm): void {
    this.username = f.value.username;
    this.password= f.value.password;
    this._authService.authenticateUser(this.username, this.password);
  }

}
