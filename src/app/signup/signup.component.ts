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
      (res)=>{
        console.log('Sign up response:',res);
        var user = res.json();
        localStorage.setItem('email', user['local']['email']);
        localStorage.setItem('password', user['local']['password']);
        localStorage.setItem('id', user['_id']);
        this.router.navigateByUrl('/');
      },
      err=> console.log(err)
    );
  }
}
