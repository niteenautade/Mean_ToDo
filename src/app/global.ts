import { Injectable } from "@angular/core";


@Injectable()
export class Globals {

  
  getEmail() : any{
      return localStorage.getItem('email');
  }

  clearLocalStorage(){
      return localStorage.clear();
  }

}
