import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationDetailResponse } from '../shared/domain/ApplicationDetailResponse';
import { FormCommentResponse } from '../shared/domain/FormCommentResponse';
import { FileCommentResponse } from '../shared/domain/FileCommentResponse';

@Injectable({
  providedIn: 'root'
})
export class EmpReviewApplicationService {
  appID: number;
  employeeID: number;
  constructor(private http: HttpClient) { }

  setAppID(id: number) {
    this.appID = id;
  }

  getAppID() {
    return this.appID;
  }

  setEmployeeID(id: number) {
    this.employeeID = id;
  }

  getEmployeeID() {
    return this.employeeID;
  }

  getApplicationDetail() {
    
    return this.http.get('http://localhost:4200/getApplicationDetail', {params: {employeeId: this.getEmployeeID()+""}})
            .map((detailRes: ApplicationDetailResponse) => {
              console.log(detailRes);
              return detailRes;
            })
  }

  getFormComment() {
    return this.http.get('http://localhost:4200/employee/getFormComment', {params: {employeeID: this.getEmployeeID()+""}})
            .map((res: FormCommentResponse) => {
              console.log(res);
              return res.comment;
            })
  }

  getFileComment() {
    return this.http.get('http://localhost:4200/employee/getFileComment', {params: {employeeID: this.getEmployeeID()+""}})
            .map((fileRes: FileCommentResponse) => {
              return fileRes.fileCommentList;
            })
  }
}
