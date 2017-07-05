import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';  
import 'rxjs/add/operator/map';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : Http,private router:Router) { }
  onSubmit(data){
    /*var headers = new Headers();
    headers.append('Content-Type','application/json;charset=utf-8');*/
    console.log('yahoooooo',data);
    this.http.post('/login',data).subscribe(
      (resp)=>{
        
        console.log("respoooooooo",resp)

        

        
          this.router.navigateByUrl('/profile');
          // this.router.navigateByUrl(...)
        
      },
      err=> console.log(err)
    );
  }
  ngOnInit() {
  }

}
