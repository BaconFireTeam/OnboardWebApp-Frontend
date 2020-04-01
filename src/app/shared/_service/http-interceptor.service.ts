import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Constant } from '../domain/Constant';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private auth : AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('INTERCEPTOR');                                             
    return next.handle(req).pipe(
      map(resp => {
        if (resp instanceof HttpResponse) {
          console.log(resp.status);
          let roles = resp.headers.get("Roles");
          // test for id
          let id = resp.headers.get("id");
          if(id) {
            this.auth.setCurrentId(id);
          }
          // 
          if (roles)
            this.auth.setCurrentRole(roles);
          return  resp;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
            window.location.href = Constant.AUTH_SERVER;
        }
        return throwError(error);
      })
    );
  }
}