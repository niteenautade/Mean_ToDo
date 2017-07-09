import { Component, OnInit } from '@angular/core';
import { Globals } from './../global';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
  }

}
