import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../shared/domain/token';
import { Observable } from 'rxjs';

@Injectable()
export class TokenService {

  private tokensUrl: string;

  constructor(private http: HttpClient) {
    this.tokensUrl = 'http://localhost:8080/tokens';
  }

  public findAll(): Observable<Token[]> {
    return this.http.get<Token[]>(this.tokensUrl);
  }

  public save(token: Token) {
    return this.http.post<Token>(this.tokensUrl, token);
  }
}