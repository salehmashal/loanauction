import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';

@Injectable()
export class LoginService{
constructor(private http: Http){}
    loginService(email: string,password: string){
                return this.http.post('https://apibaas-trial.apigee.net/tornado/loanauction/token.json',{"grant_type":"password","username":email,"password":password});
    }
    
    getUserById(uuid: string){
                 const access_token=localStorage.getItem("access_token");
                 let headers = new Headers({ 'authorization': 'Bearer '+ access_token});
                 let options = new RequestOptions({ headers: headers });
                 return this.http.get('https://apibaas-trial.apigee.net/tornado/loanauction/users/'+uuid,options);
    }
}