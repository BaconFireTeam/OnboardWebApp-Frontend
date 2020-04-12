import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../shared/domain/token';
import { Observable } from 'rxjs';
import { ServiceStatus } from '../shared/domain/Response.model';

@Injectable()
export class TokenService {

  private tokensUrl: string;

  constructor(private http: HttpClient) {
    this.tokensUrl = 'http://localhost:4200/api/token-setup';
  }

  save(token: Token) {
    return this.http.post(this.tokensUrl,{token}).map((res:ServiceStatus)=>{});
  }

  

}