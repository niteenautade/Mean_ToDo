import { Component, OnInit } from '@angular/core';
import { DatepickerComponent } from './../datepicker/datepicker.component';
import { Http, Headers } from '@angular/http';  
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Globals } from './../global';
import {SharedataService} from './../sharedata.service'
@Component({
  selector: 'app-oldtasks',
  templateUrl: './oldtasks.component.html',
  styleUrls: ['./oldtasks.component.css']
})
export class OldtasksComponent implements OnInit {

  tasks = [];
  error:string='';
  showLoading:boolean=false;
  selectedDate : any;
  dateToBePrinted : string;
  constructor(private globals: Globals,private router:Router,private http:Http,private _sharedataservice:SharedataService) {
    if(this.globals.getEmail() )this.getTasks();
  }
  getDateFromService(){
    this.selectedDate = this._sharedataservice.selectedDate;
    console.log('OldtasksComponent',this._sharedataservice.selectedDate,typeof(this._sharedataservice.selectedDate));
    this.dateToBePrinted = this.toStringPrintDate(this.selectedDate);
    this.getTasks();
  }
  ngOnInit() {}
  
  getTasks(){
    if(this.selectedDate!=undefined){
      this.showLoading = true;
      this.http.get('/api/get/'+this.globals.getId()+'/'+this.selectedDate.toString()).subscribe(res=>{
        setTimeout(()=>{
          this.showLoading = false;
          try{
            this.tasks = res.json();
          }
          catch(e){
            console.log('errrr',e);
            this.error = ' Session Expired! Please Login Again! ';
            //this.router.navigateByUrl('/');
            this.router.navigateByUrl('/');
          }
        },200);
      });
    }
  }

/*  deleteTask(id){
    this.http.get('/api/delete/'+this.globals.getId()+'/'+id).subscribe(
      (res)=>{this.getTasks();},
      err=> console.log(err)
    );
  }*/
  /*addTask(task){
    var headers = new Headers();
    task['done'] = false;
    task['email'] = this.globals.getEmail();
    task['id'] = this.globals.getId();
    task['created_at'] = new Date()
    headers.append('Content-Type','application/json;charset=utf-8');
    console.log('yahoooooo',task);
    this.http.post('/api/add',task,headers).subscribe(
      (res)=>{
        this.getTasks();
      },
      err=> console.log(err)
    );
  }
  */
  taskDone(status){
    if(status==true){
      return 'line-through';
    }
    else return '';
  }

  toggleTask(id,done){
    var user = {};
    user['id']=this.globals.getId();
    user['_id']=id;
    user['done']=done;
    this.http.post('/api/toggle/',user).subscribe(
      (res)=>{this.getTasks();
        console.log('toggleTask response index component',res);
      },
      err=> console.log(err)
    );
    
  }

  toStringPrintDate(date){
    var stringArray = date.toString().split(' ');
    var newDate = stringArray[2]+'-'+stringArray[1]+'-'+stringArray[3];
    return newDate;
  }

}
