import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../domain/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  testUser = "user";
  testPW = "password";

  constructor(private http: HttpClient) { }


  login(username: string, password: string) {
    console.log("inside auth");
    return this.http.post(`/login`, {username, password})
    .pipe(map(user => {
      console.log("inside http");
      if(user){
        console.log("user exist")
        return;
      }
      console.log("no user exists")
    }));
    
    // if(username == this.testUser && password == this.testPW){
    //   console.log("login works");
    //   console.log(username);
    //   console.log(password)
    //   return true;
    // }
    // console.log("login failed worked");
    // return false;
  }
}
