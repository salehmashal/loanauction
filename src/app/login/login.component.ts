import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http'
import * as $ from 'jquery';
import * as toastr from 'toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService,private router: Router) { }
  
  onSignin(form:NgForm){
          const email=form.value.email;
          const password=form.value.password;
          
          this.loginservice.loginService(email,password).subscribe(
          (response: Response)=>{
          toastr["success"]("Welcome "+response.json().user.username)
          localStorage.setItem("access_token",response.json().access_token);
          localStorage.setItem("user",JSON.stringify(response.json().user));
          this.router.navigate(['/home']);
          },function(e){
          toastr.options = {
              "closeButton": true,
              "debug": false,
              "newestOnTop": false,
              "progressBar": true,
              "positionClass": "toast-top-right",
              "preventDuplicates": true,
              "onclick": null,
              "showDuration": "300",
              "hideDuration": "1000",
              "timeOut": "5000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
          };
          toastr["error"](e.json().error_description)
          });
  }
  

  ngOnInit() {
  }

}
 