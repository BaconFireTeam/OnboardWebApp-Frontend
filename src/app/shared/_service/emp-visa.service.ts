import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { VisaStatusResponse, ApplicationResponse } from '../domain/VisaResponse';
import 'rxjs/add/operator/map';
import { ApplicationWorkFlow } from '../domain/Employee';
import { UploadFileResponse } from './FileResponse';
import { URLSearchParams } from 'url';

@Injectable({
  providedIn: 'root'
})
export class EmpVisaService {
  testFile: File;

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

  startApplication(employeeId: number){
    return this.http.post('http://localhost:4200/employee/application-open', {employeeId}).map((res: ApplicationResponse) => {
      return res;
    });
  }

  submitApplication(visaFile: FileList, employeeID: number, type: string){
    let file: FormData = new FormData();
    file.append('file', visaFile[0], visaFile[0].name);
    file.append('employeeID', employeeID+"");
    file.append('type', type);
    return this.http.post('http://localhost:4200/uploadFile', file).map((res: UploadFileResponse) => {
      return res;
    });
  }

  updateAppStatus(applicationId: number){
    return this.http.post('http://localhost:4200/employee/application-submit', {applicationId}).map((res: ApplicationResponse) => {
      return res;
    });
  }
  
}
