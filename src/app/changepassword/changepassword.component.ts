import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  newPassword:string='';
  confirmNewPassword:string='';
  currentPassword:string='';
  statusSuccess:string='';
  statusFailure:string='';
  constructor(private _http: Http) { }

  ngOnInit() {
  }
  onSubmit(data){
    this.statusFailure='';
    this.statusSuccess='';
    console.log('change Password data to be submitted',data);
    this._http.post('/changePassword',data).subscribe(
      (res)=>{
        console.log(res.text());
        data = res.json();
        if(data.success==200)this.statusSuccess=data.message;
        else this.statusFailure=data.message;
      }
    );
  }

}
