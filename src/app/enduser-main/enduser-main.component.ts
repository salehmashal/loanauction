import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enduser-main',
  templateUrl: './enduser-main.component.html',
  styleUrls: ['./enduser-main.component.css']
})
export class EnduserMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onClick(){
  
  console.log("my profile");
  
  }

}
