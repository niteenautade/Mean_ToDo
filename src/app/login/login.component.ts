import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';  
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : Http) { }
  onSubmit(data){
    /*var headers = new Headers();
    headers.append('Content-Type','application/json;charset=utf-8');*/
    console.log('yahoooooo',data);
    this.http.post('/login',data).subscribe(
      ()=>{},
      err=> console.log(err)
    );
  }
  ngOnInit() {
  }

}
