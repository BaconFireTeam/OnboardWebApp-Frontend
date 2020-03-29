import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VisaStatusResponse, ApplicationResponse } from '../domain/VisaResponse';
import { GetDocumentsListResponse } from './FileResponse';

@Injectable({
  providedIn: 'root'
})
export class HrVisaService {

  constructor(private http : HttpClient) { }

  checkVisas(){
    console.log("going to backend");
    return this.http.get('http://localhost:4200/api/hr/visa-status').map((res: VisaStatusResponse) => {
    console.log(res);  
    return res.statusList;
    });
  }

  checkApplications(){
    return this.http.get('http://localhost:4200/api/hr/application').map((res: ApplicationResponse) => {
    console.log(res);  
    return res.applicationList;
    });
  }

  updateApplication(applicationId: number, status: string){
    return this.http.post('http://localhost:4200/api/hr/application-update', {applicationId, status}).map((res: ApplicationResponse) => {
      return res.applicationList;
    });
  }

  getDocuments(employeeID: number, type: string) {
    let param: FormData = new FormData();
    param.append('employeeID', employeeID+"");
    param.append('type', type);
    return this.http.post('http://localhost:4200/api/employee/getPersonalDocument', param).map((res: GetDocumentsListResponse) => { 
    return res.uploadFileResponseList;
    });
  }

  updateVisaStatus(employeeId: number, newExpDate: string){
    return this.http.post('http://localhost:4200/api/hr/visa-update', {employeeId, newExpDate}).map((res: VisaStatusResponse) => {
      return res.statusList;
    });
  }
}
