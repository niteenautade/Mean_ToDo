import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http'; 

@Injectable()
export class Globals {
  constructor(private http : Http) {}
   
  getEmail() : any{
      return localStorage.getItem('email');
  }
  getPassword() : any{
      return localStorage.getItem('password');
  }
  getId() : any{
      return localStorage.getItem('id');
  }

  clearLocalStorage(){
      return localStorage.clear();
  }
 
}
