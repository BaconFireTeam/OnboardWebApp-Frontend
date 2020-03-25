import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VisaStatusResponse, ApplicationResponse } from '../domain/VisaResponse';
import 'rxjs/add/operator/map';
import { ApplicationWorkFlow } from '../domain/Employee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpVisaService {

  constructor(private http : HttpClient) { }

  checkApplication(employeeId: number) {

    let applicationResponse: ApplicationResponse = new ApplicationResponse();
    let applicationWorkFlow: ApplicationWorkFlow = new ApplicationWorkFlow();
    applicationWorkFlow.createdDate = '11/12/2019';
    applicationWorkFlow.id = 1;
    applicationWorkFlow.employeeID = 1;
    applicationWorkFlow.status = 'open';
    applicationResponse.applicationWorkFlow = applicationWorkFlow;
    applicationResponse.employeeName = 'Zack';
    applicationResponse.openOrPending = true;

    return of(applicationResponse);

    // return this.http.post('http://localhost:4200/employee/application', {employeeId}).map((res: ApplicationResponse) => {
    //   return res;
    // });
  }

  checkVisaStatus(employeeId: number){
    return of(new VisaStatusResponse());
    // return this.http.post('http://localhost:4200/employee/visa-status', {employeeId}).map((res: VisaStatusResponse) => {
    //   return res;
    // });
  }
}
