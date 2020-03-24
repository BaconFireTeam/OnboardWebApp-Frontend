import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VisaStatusResponse, ApplicationResponse } from '../domain/VisaResponse';

@Injectable({
  providedIn: 'root'
})
export class HrVisaService {

  constructor(private http : HttpClient) { }

  checkVisas(){
    console.log("going to backend");
    return this.http.get('http://localhost:4200/hr/visa-status').map((res: VisaStatusResponse) => {
    console.log(res);  
    return res.statusList;
    });
  }

  checkApplications(){
    return this.http.get('http://localhost:4200/hr/application').map((res: ApplicationResponse) => {
    console.log(res);  
    return res.applicationList;
    });
  }

  updateApplication(applicationId: number, status: string){
    return this.http.post('http://localhost:4200/hr/application-update', {applicationId, status}).map((res: ApplicationResponse) => {
      return res.applicationList;
    });
  }
}
