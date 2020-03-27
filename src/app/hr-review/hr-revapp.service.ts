import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OngoingApplicationResponse } from '../shared/domain/OngoingApplicationResponse';
import { ApplicationDetailResponse } from '../shared/domain/ApplicationDetailResponse';
import { PersonalDocumentResponse } from '../shared/domain/PersonalDocumentResponse';
import { CommentRequest } from './domain/CommentRequest';
import { FileCommentRequest, FileComment } from './domain/FileCommentRequest';
import { Response } from '../shared/domain/Response.model'

@Injectable({
  providedIn: 'root'
})
export class HrRevappService {

  employeeID: number;
  
  formComment: string;
  fileComment: Map<number, string> = new Map();

  constructor(private http: HttpClient) { }

  setEmployeeID(id: number) {
    this.employeeID = id;
  }

  getEmployeeID() {
    return this.employeeID;
  }

  setFormComment(comment: string) {
    this.formComment = comment;
  }

  getFormComment() {
    return this.formComment;
  }

  setFileComment(comment: Map<number, string>) {
    this.fileComment = comment;
  }

  getFileComment() {
    return this.fileComment;
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

  getDocumentList(id: number) {
    return this.http.get('http://localhost:4200/getPersonalDocument', {params: {employeeID: id+"", type: "Onboarding"}})
      .map((docRes: PersonalDocumentResponse) => {
          console.log(docRes);
          return docRes.uploadFileResponseList;
      })
  }

  rejectApplication(formComment: string, fileComments: Map<number, string>) {
    console.log(formComment);
    console.log(fileComments);
    
    this.commentOnForm(formComment).subscribe(
      (res) => {
        console.log(res)
      }
    )

    this.commentOnFiles(fileComments).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }

  commentOnFiles(fileComments: Map<number, string>) {
    let fileCommentRequest = new FileComment();

    let commentList = [];

    fileComments.forEach((comment: string, id: number) => {
      console.log(id);
      console.log(comment);

      let filecomment = new CommentRequest();
      filecomment.fileID = id;
      filecomment.comment = comment;

      commentList.push(filecomment);    
    });

    fileCommentRequest.commentRequestList = [];
    commentList.forEach((comment) => {
      fileCommentRequest.commentRequestList.push(comment)
    })
    console.log(commentList);

    return this.http.post('http://localhost:4200/hr/saveFileComment', {fileCommentRequest})
      .map((res: Response) => {
        console.log(res);
        return res;
      })
  }

  commentOnForm(formComment: string) {
    let commentRequest = new CommentRequest();
    commentRequest.employeeID = this.employeeID;
    commentRequest.comment = formComment;

    console.log(commentRequest)

    return this.http.post('http://localhost:4200/hr/saveFormComment', commentRequest)
      .map((res: Response) => {
        console.log(res);
        return res;
      })
  }

  updateApplication(type: string) {
    
  }
}
