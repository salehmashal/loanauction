import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
  userName='saleh mashal';
  userImg='https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/13669834_10210331531752792_3672295445778243955_n.jpg?oh=2d962ca3d479dacddf15d73fcfcef12f&oe=599FD66B';

}
