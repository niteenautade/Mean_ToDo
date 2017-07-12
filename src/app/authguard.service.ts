import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild,CanDeactivate, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Globals } from './global';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private globals: Globals){}
    canActivate() {
        if(this.globals.getEmail()){
          console.log('User is authenticated. Opening route')
          return true;
        }
        else {
          console.log('User is not authenticated. So route cannot be loaded');
          this.router.navigateByUrl('/');
        }
    }
    

}
@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild {
  constructor(private router:Router,private globals: Globals){}
  canActivate() {
    if(!this.globals.getEmail()){
      console.log('User is not authenticated. Opening Login page')
      return true;
    }
    else {
      console.log('User is authenticated. So login page cannot be loaded');
      this.router.navigateByUrl('/');
    }
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}
