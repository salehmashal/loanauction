import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service'
import { Response } from '@angular/http'
import * as $ from 'jquery';
import * as toastr from 'toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    userName;
    userImg;
  constructor(private headerservice: HeaderService,private router: Router) {
  
   this.headerservice.getLogedInUser().subscribe(
    (response: Response)=>{
     this.userName= response.json().entities[0].username;
     this.userImg= response.json().entities[0].picture;
     localStorage.setItem("userImg",response.json().entities[0].picture);
     localStorage.setItem("userName",response.json().entities[0].username)
    },(error: Error)=>{
    this.router.navigate(['/']);
    console.log(error)
    });
   
  }
  
  onLogout(){
   this.headerservice.getTokenRevoke().subscribe( (response: Response)=>{
      localStorage.clear();
      this.router.navigate(['/']);
   },(error: Error)=>{});
  }

  
  ngOnInit() {}
  
 

}
