import { Component, OnInit } from '@angular/core';
import { HrVisaService } from '../shared/_service/hr-visa.service';
import { VisaStatusResponse, ApplicationResponse } from '../shared/domain/VisaResponse';
import { UploadFileResponse } from '../shared/_service/FileResponse';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hr-visa',
  templateUrl: './hr-visa.component.html',
  styleUrls: ['./hr-visa.component.css']
})
export class HrVisaComponent implements OnInit {
  responses: Array<VisaStatusResponse>;
  applications: Array<ApplicationResponse>;
  uploads:Array<UploadFileResponse>;
  newExpDate: string = '';
  error: string;
  parentPath: string;
  currentPath: string;

  constructor(private hrVisaService: HrVisaService, private router: Router,
    private route: ActivatedRoute) { }

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

  approveApplication(applicationId:number, employeeId: number, newExpDate: string) {
    if(this.newExpDate == ''){
      this.error = "New Expiration Date is required";
    }
    else{
      console.log(newExpDate);
      this.hrVisaService.updateVisaStatus(employeeId, newExpDate).subscribe(
        (visaRes) => {
          this.responses = visaRes;
      });
      console.log("would update applciation");
      console.log(applicationId);
      this.hrVisaService.updateApplication(applicationId, 'closed').subscribe(
      (appRes) => {
        this.applications = appRes;
        console.log(this.applications);
      });
    }
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
