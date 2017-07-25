import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  modelEmail : any;
  constructor(private http : Http) { }

  ngOnInit() {
  }
  status:string = '';
  onSubmit(data){
    console.log('making post request => ',data);
    this.http.post('/forgotPassword',data).subscribe(
      (res)=>{
        this.status=res.text();
      }
    );
  }
}
