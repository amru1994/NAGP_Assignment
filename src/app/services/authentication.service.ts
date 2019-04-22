import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticUser$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private _router: Router) { }

  authenticateUser(username: string, password: string){
    if (username.toLowerCase() == 'admin' && password.toLowerCase() == 'admin'){
      this.isAuthenticUser$.next(true);
      this._router.navigate( ['/studentsList'] );
    }
    else{
      this.isAuthenticUser$.next(false);
    }
  }
}
