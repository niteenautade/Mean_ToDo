import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';  
import { Router } from '@angular/router';
import { Globals } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private router:Router,private http : Http,private globals: Globals) {
      console.log("Hello World");
      this.http.get('/authenticated').subscribe(
        (res)=>{
          //console.log('Bus Bus',res.json());
          try{
            var user = res.json();
            console.log('Bus Bus',user);
            if(user['local']['email']){
              console.log("User is Authenticated App comp constructor")
            }
          }
          catch(e){
            console.log("Constructor data is not a json,Clearing LocalStorage");
            this.globals.clearLocalStorage();
          } 
        }
      );
  }
  logout(){
    this.globals.clearLocalStorage();
    this.http.get('/logout').subscribe(
      ()=>{
        this.router.navigateByUrl('/');
      }
    );
  }

}
