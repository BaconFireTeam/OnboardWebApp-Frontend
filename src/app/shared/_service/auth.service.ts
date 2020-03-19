import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { map }  from 'rxjs/operators';
import { Response } from '../domain/Response.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../domain/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>

  constructor(private http : HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }


  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post('http://localhost:4200/login', {username, password}).map((res: Response) => {
      if(res.user){
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      this.currentUserSubject.next(res.user);
      }
      console.log(res);
      return res.user;
    });
  }

  checkToken(email: string, token: string) {
    return this.http.post('http://localhost:4200/token', {email, token}).map((res: Response) => {
      console.log(res);
      return res.serviceStatus;
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
