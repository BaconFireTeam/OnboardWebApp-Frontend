import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OngoingApplicationResponse } from '../domain/OngoingApplicationResponse';

@Injectable({
  providedIn: 'root'
})
export class HrRevappService {

  constructor(private http: HttpClient) { }

  getApplicationList() {
    return this.http.get('http://localhost:4200/hr/getApplication').
      map((appRes: OngoingApplicationResponse) => {
        console.log(appRes);
        return appRes.applicationList;
      })
  }
}
