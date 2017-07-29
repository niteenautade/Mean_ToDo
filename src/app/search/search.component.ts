import { Component, OnInit } from '@angular/core'
import { Http, Headers } from '@angular/http';  
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Globals } from './../global';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tasks = [];
  error:string='';
  showLoading:boolean=false;
  constructor(public globals: Globals,private router:Router,private http:Http) {
    if(this.globals.getEmail() )this.getAllTasks();
  }

  ngOnInit() {
  }

  getAllTasks(){
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
    });
  }
  searchedList = [];
  searchTask(taskToBeSearched){
    console.log("Searching:",taskToBeSearched)
    if(taskToBeSearched!=''){
      this.searchedList = [];
      this.searchedList=this.tasks.filter(function(jsonTask,index){
        return jsonTask.task.toLowerCase().indexOf(taskToBeSearched.toLowerCase()) > -1
        /* if(jsonTask.task.toLowerCase().indexOf(taskToBeSearched.toLowerCase()) > -1){
          this.searchedList.push(jsonTask);
        } */
      })
    }
    else this.searchedList = [];
  }

}
