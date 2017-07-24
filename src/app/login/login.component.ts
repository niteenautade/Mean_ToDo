import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';  
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Globals } from './../global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : Http,private router:Router,private globals: Globals) {}
  loginstatus : string = '';
  modelEmail : string;
  modelPassword : string;
  onSubmit(data){
    console.log('making post request => ',data);
    this.http.post('/login',data).subscribe(
      (res)=>{
        try{
          var user = res.json();
          console.log("ress",res);
          console.log("respoooooooo",user['local']);
          localStorage.setItem('email', user['local']['email']);
          localStorage.setItem('password', user['local']['password']);
          localStorage.setItem('id', user['_id']);
          this.loginstatus = '';
          this.router.navigateByUrl('/');
        }
        catch(e){
          this.loginstatus = 'Wrong Username Password Combination.Try Again';
        }
      }
    );
  }
  
  ngOnInit() {
  }

}
