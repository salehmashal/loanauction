import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService{
constructor(private http: Http){}
    loginService(email: string,password: string){
                return this.http.post('https://apibaas-trial.apigee.net/tornado/loanauction/token.json',{"grant_type":"password","username":email,"password":password});
    }
}