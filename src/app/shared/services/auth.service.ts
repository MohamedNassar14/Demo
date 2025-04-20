import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient, private router:Router) {
    if(localStorage.getItem('token') != null)
      {
        this.saveUserData();
      }
   }
  userToken:BehaviorSubject<any> = new BehaviorSubject<any>(null);


  saveUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('token'));
    let decodedToken:object =   jwtDecode(encodedToken);
    this.userToken.next(decodedToken)
  }

  signUp(userDataAccount:object):Observable<any> {
    return this.httpClient.post(`http://localhost:3000/api/signUp`, userDataAccount);
  }

  signIn(userDataLogin:object):Observable<any> {
    return this.httpClient.post(`http://localhost:3000/api/signIn`, userDataLogin);
  }

  signOut() {
    localStorage.removeItem('token');
    this.userToken.next(null);
    this.router.navigate(['/home'])
  }

}


