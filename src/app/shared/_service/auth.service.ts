import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  testUser = "user";
  testPW = "password";

  constructor() { }


  login(username: string, password: string) {
    if(username == this.testUser && password == this.testPW){
      console.log("login works");
      console.log(username);
      console.log(password)
      return true;
    }
    console.log("login failed worked");
    return false;
  }
}
