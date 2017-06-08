import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
   userName;
   userImg;
   userType
  constructor() {
   
  }

  ngOnInit() {
  const user=JSON.parse(localStorage.getItem("user"));
   this.userName=user.name;
   this.userImg=user.picture;
   this.userType=user.type;
  }

}
