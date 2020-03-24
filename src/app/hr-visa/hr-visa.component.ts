import { Component, OnInit } from '@angular/core';
import { HrVisaService } from '../shared/_service/hr-visa.service';
import { VisaStatusResponse, ApplicationResponse } from '../shared/domain/VisaResponse';
import { UploadFileResponse } from '../shared/_service/FileResponse';

@Component({
  selector: 'app-hr-visa',
  templateUrl: './hr-visa.component.html',
  styleUrls: ['./hr-visa.component.css']
})
export class HrVisaComponent implements OnInit {
  responses: Array<VisaStatusResponse>;
  applications: Array<ApplicationResponse>;
  uploads:Array<UploadFileResponse>;

  constructor(private hrVisaService: HrVisaService) { }

  ngOnInit(): void {
    this.hrVisaService.checkVisas().subscribe(
      (res)=>{
        this.responses = res;
        console.log(this.responses);
      });
      console.log("hello");

    this.hrVisaService.checkApplications().subscribe(
      (appRes) => {
        this.applications = appRes;
        console.log(this.applications);
      });
  }

  approveApplication(applicationId:number) {
    console.log(applicationId);
    this.hrVisaService.updateApplication(applicationId, 'closed').subscribe(
      (appRes) => {
        this.applications = appRes;
        console.log(this.applications);
      });
  }

  getDocs(id: number, type: string){
    console.log(id);
    console.log(type);
    this.hrVisaService.getDocuments(id, type).subscribe(
      (appRes) => {
        this.uploads = appRes;
        console.log(this.uploads);
      });

  }
}
