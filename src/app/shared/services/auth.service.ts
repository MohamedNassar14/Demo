import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }


  signUp(userDataAccount:object):Observable<any> {
    return this.httpClient.post(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/signUp`, userDataAccount);
  }

  signIn(userDataLogin:object):Observable<any> {
    return this.httpClient.post(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/signIn`, userDataLogin);
  }

}
