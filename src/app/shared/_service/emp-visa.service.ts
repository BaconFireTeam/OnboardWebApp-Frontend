import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VisaStatusResponse, ApplicationResponse } from '../domain/VisaResponse';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmpVisaService {

  constructor(private http : HttpClient) { }

  checkApplication(employeeId: number) {
    return this.http.post('http://localhost:4200/employee/application', {employeeId}).map((res: ApplicationResponse) => {
      return res;
    });
  }

  checkVisaStatus(employeeId: number){
    return this.http.post('http://localhost:4200/employee/visa-status', {employeeId}).map((res: VisaStatusResponse) => {
      return res;
    });
  }
}
