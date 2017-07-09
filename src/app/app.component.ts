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
  constructor(private router:Router,private http : Http,private globals: Globals) { }
  logout(){
    this.globals.clearLocalStorage();
    this.http.get('/logout').subscribe(
      ()=>{
        this.router.navigateByUrl('/');
      }
    );
  }

}
