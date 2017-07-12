import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {
  selectedDate : any;
  dateChanged(model){
    this.selectedDate = new Date(model.year,model.month-1,model.day);
  }
  constructor() { 
  }
}
