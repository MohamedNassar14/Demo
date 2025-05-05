import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private httpClient:HttpClient) { }

  
    adminToken:BehaviorSubject<any> = new BehaviorSubject<any>(null);
    
  
    saveTokenAdmin() {
      let encodedToken = JSON.stringify(localStorage.getItem('adminToken'));
      let decodedToken:object =   jwtDecode(encodedToken);
      this.adminToken.next(decodedToken)
    }
  

  adminSignUp(adminDataAccount:object):Observable<any> {
    return this.httpClient.post(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/signUp-admin`, adminDataAccount);
  }
  
  adminSignIn(adminDataLogin:object):Observable<any> {
    return this.httpClient.post(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/signIn`, adminDataLogin);
  }
}
