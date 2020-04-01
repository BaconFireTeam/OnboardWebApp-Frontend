import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { map }  from 'rxjs/operators';
import { Response } from '../domain/Response.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User, Role } from '../domain/User';
import { HouseService } from './house.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>
  public currentUserRoleSubject: Subject<string>;
  public currentUserRole: Observable<string>;
  public currentUserIdSubject: Subject<number>;
  public currentUserId: Observable<number>

  constructor(private http : HttpClient,private houseService: HouseService) {
    this.currentUserRoleSubject = new Subject<string>();
    this.currentUserId = new Subject<number>();
   }


  // public get currentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }

  setCurrentRole(role) {
    this.currentUserRoleSubject.next(role);
  }

  setCurrentId(id) {
    this.currentUserIdSubject.next(id);
  }

  login(username: string, password: string) {
    // return this.http.post('http://localhost:4200/api/login', {username, password}).map((res: Response) => {
    //   if(res.user){
    //   localStorage.setItem('currentUser', JSON.stringify(res.user));
    //   this.currentUserSubject.next(res.user);
    //   localStorage.setItem('currentUserRole', JSON.stringify(res.role));
    //   this.currentUserRoleSubject.next(res.role);
    //   }
    //   console.log(res);
    //   this.houseService.employeeID=res.user.id;
    //   return res.user;
    // });
  }

  checkToken(email: string, token: string) {
    return this.http.post('http://localhost:4200/api/token', {email, token}).map((res: Response) => {
      console.log(res);
      return res.serviceStatus;
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUserRole');
    this.currentUserRoleSubject.next(null);
  }
}
