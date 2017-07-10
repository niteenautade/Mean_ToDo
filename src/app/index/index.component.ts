import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';  
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Globals } from './../global';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  tasks = [];
  constructor(private globals: Globals,private router:Router,private http:Http) {
    this.getTasks();
  }

  ngOnInit() {
  }

  
  getTasks(){
    this.http.get('/api/get/'+this.globals.getId()).subscribe(res=>{
      console.log("GotData: ",res.json());
      this.tasks = res.json();
    });
  }

  deleteTask(id){
    this.http.get('/api/delete/'+this.globals.getId()+'/'+id).subscribe(
      ()=>{}
    );
    this.getTasks();
  }
  addTask(task){
    var headers = new Headers();
    task['done'] = false;
    task['email'] = this.globals.getEmail();
    task['id'] = this.globals.getId();
    headers.append('Content-Type','application/json;charset=utf-8');
    console.log('yahoooooo',task);
    this.http.post('/api/add',task,headers).subscribe(
      ()=>{},
      err=> console.log(err)
    );
    this.getTasks();
  }


  taskDone(status){
    //console.log("Statusssss", status);
    if(status=='true'){
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
      (resp)=>{this.getTasks();
        console.log('bus bus bus',resp)
      },
      err=> console.log(err)

    );
    
  }
}
