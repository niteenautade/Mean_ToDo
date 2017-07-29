import { Component, OnInit } from '@angular/core'
import { Http, Headers } from '@angular/http';  
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Globals } from './../global';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  
  tasks = [];
  numberOfTasksDone:number=0;
  numberOfTasksNotDone:number=0;
  pieChartDoneNotDoneLabels = ['Totals Tasks Done','Total Tasks Not done'];
  pieChartDoneNotDoneData=[];
  pieChartType='doughnut';
  error:string='';
  showLoading:boolean=false;
  todaysDate:any = new Date();
  constructor(public globals: Globals,private router:Router,private http:Http) {
    if(this.globals.getEmail() )this.getAllTasks();
  }
  ngOnInit(){}

  getAllTasks(){
    this.showLoading = true;
    this.http.get('/api/get/'+this.globals.getId()).subscribe(res=>{
      setTimeout(()=>{
        this.showLoading = false;
        try{
          this.tasks = res.json();
          this.calcTasksDoneNotDone();
          this.calcMonthlyTasksDoneNotDone(this.tasks,this.monthlyTasksDone,this.monthlyTasksNotDone,this.yearToGetAnalyticsFor);
        }
        catch(e){
          console.log('errrr',e);
          this.error = ' Session Expired! Please Login Again! ';
          window.location.reload();
        }
      },200);
    });
  }

  calcTasksDoneNotDone(){
    for(var i=0;i<this.tasks.length;i++){
      if(this.tasks[i].done==true) this.numberOfTasksDone++;
      else this.numberOfTasksNotDone++;
    }
    this.pieChartDoneNotDoneData[0]=this.numberOfTasksDone;
    this.pieChartDoneNotDoneData[1]=this.numberOfTasksNotDone;
  }

    // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  

  //Monthly
  /* monthlyTasksDone = [0,0,0,0,0,0,0,0,0,0,0,0];
  monthlyTasksNotDone = [0,0,0,0,0,0,0,0,0,0,0,0]; */
  monthlyTasksDone = new Array(12).fill(0);
  monthlyTasksNotDone = new Array(12).fill(0); 
  presentYear = new Date().getFullYear();
  yearToGetAnalyticsFor = this.presentYear;
  calcMonthlyTasksDoneNotDone(tasks,monthlyTasksDone,monthlyTasksNotDone,yearToGetAnalyticsFor){
    tasks.filter(function(task,index){
      let date = new Date(task.created_at);
      if(date.getFullYear()==yearToGetAnalyticsFor){
        let month = date.getMonth();
        if(task.done==true){
          monthlyTasksDone[month]++;
        }
        else monthlyTasksNotDone[month]++;
      }
    })
  }
  getBarChartForThisParticularYear(data){
    console.log("Year",data.year);
    this.yearToGetAnalyticsFor = data.year;
    this.monthlyTasksDone.fill(0);
    this.monthlyTasksNotDone.fill(0); 
    this.tasks=[];
    this.getAllTasks();
    
  }

  public barChartLabels:string[] = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  public barChartData:any[] = [
    {data: this.monthlyTasksDone, label: 'Tasks done'},
    {data: this.monthlyTasksNotDone, label: 'Tasks not done'}
  ];
  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLegend:boolean = true;
  public barChartType:string = 'bar';


}
