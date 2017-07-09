import { Component, OnInit } from '@angular/core';
import { Globals } from './../global';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
  }

}
