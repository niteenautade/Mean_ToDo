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
  error:string='';
  showLoading:boolean=false;
  constructor(private globals: Globals,private router:Router,private http:Http) {
    if(this.globals.getEmail() )this.getTasks();
  }

  ngOnInit() {
  }

  
  getTasks(){
    this.showLoading = true;
    this.http.get('/api/get/'+this.globals.getId()).subscribe(res=>{
      setTimeout(()=>{
        this.showLoading = false;
        try{
          this.tasks = res.json();
        }
        catch(e){
          console.log('errrr',e);
          this.error = ' Session Expired! Please Login Again! ';
          window.location.reload();
        }
      },200);
    }
    );
    
  }

  deleteTask(id){
    this.http.get('/api/delete/'+this.globals.getId()+'/'+id).subscribe(
      (res)=>{this.getTasks();},
      err=> console.log(err)
    );
    
  }
  addTask(task){
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
}
