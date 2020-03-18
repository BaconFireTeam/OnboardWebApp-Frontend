import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { map }  from 'rxjs/operators';
import { Response } from '../domain/Response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  testUser = "user";
  testPW = "password";

  constructor(private http : HttpClient) { }


  login(username: string, password: string) {
    return this.http.post('http://localhost:4200/login', {username, password}).map((res: Response) => {
      console.log(res);
      return res.user;
    });
    
    // if(username == this.testUser && password == this.testPW){
    //   console.log("login works");
    //   console.log(username);
    //   console.log(password)
    //   return true;
    // }
    // console.log("login failed worked");
    // return false;
  }

  checkToken(email: string, token: string) {
    return this.http.post('http://localhost:4200/token', {email, token}).map((res: Response) => {
      console.log(res);
      return res.serviceStatus;
    });
  }
}
