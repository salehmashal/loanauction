import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';

@Injectable()

export class HeaderService{

    constructor(private http: Http){}
    getLogedInUser(){
                 const access_token=localStorage.getItem("access_token");
                 const uuid=localStorage.getItem("userId");
                 let headers = new Headers({ 'authorization': 'Bearer '+ access_token});
                 let options = new RequestOptions({ headers: headers });
                 return this.http.get('https://apibaas-trial.apigee.net/tornado/loanauction/users/'+uuid,options);
    }
    
    getTokenRevoke(){
     const access_token=localStorage.getItem("access_token");
     const uuid=localStorage.getItem("userId");
     let headers = new Headers({ 'authorization': 'Bearer '+ access_token});
     let options = new RequestOptions({ headers: headers });
     return this.http.put('https://apibaas-trial.apigee.net/tornado/loanauction/users/'+uuid+'/revoketoken?token='+access_token,null,options);
    }
}