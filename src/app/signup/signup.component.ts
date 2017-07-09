import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';  
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Globals } from './../global';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private globals: Globals,private router:Router,private http:Http) { }

  ngOnInit() {
  }
  onSubmit(user){
    this.http.post('/signup',user).subscribe(
      ()=>{
        this.router.navigateByUrl('/');
      },
      err=> console.log(err)
    );
  }
}
