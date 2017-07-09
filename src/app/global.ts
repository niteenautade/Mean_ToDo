import { Injectable } from "@angular/core";


@Injectable()
export class Globals {
    
   
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
