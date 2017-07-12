import {Component,OnInit} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {SharedataService} from './../sharedata.service'
const now = new Date();
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit{
  selectedDate : any;
  dateChanged(model){
    this.selectedDate = new Date(model.year,model.month-1,model.day);
    this._sharedataservice.selectedDate = this.selectedDate.toString();
    console.log('DatepickerComponent',this._sharedataservice.selectedDate,typeof(this._sharedataservice.selectedDate));
  }
  constructor(private _sharedataservice : SharedataService) { 
  }
  ngOnInit() {
  
  }
}
