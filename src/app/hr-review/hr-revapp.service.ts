import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OngoingApplicationResponse } from '../shared/domain/OngoingApplicationResponse';
import { ApplicationDetailResponse } from '../shared/domain/ApplicationDetailResponse';

@Injectable({
  providedIn: 'root'
})
export class HrRevappService {
  employeeID: number;
  constructor(private http: HttpClient) { }

  setEmployeeID(id: number) {
    this.employeeID = id;
  }

  getEmployeeID() {
    return this.employeeID;
  }

  getApplicationList() {
    return this.http.get('http://localhost:4200/hr/getApplication').
      map((appRes: OngoingApplicationResponse) => {
        console.log(appRes);
        return appRes.applicationList;
      })
  }

  getApplicationDetail(id: number) {
    console.log(id);
    return this.http.get('http://localhost:4200/hr/getApplicationDetail', {params: {employeeId: id+""}})
            .map((detailRes: ApplicationDetailResponse) => {
              console.log(detailRes);
              return detailRes;
            })
  }
}
