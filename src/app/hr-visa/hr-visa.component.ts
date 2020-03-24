import { Component, OnInit } from '@angular/core';
import { HrVisaService } from '../shared/_service/hr-visa.service';
import { VisaStatusResponse, ApplicationResponse } from '../shared/domain/VisaResponse';

@Component({
  selector: 'app-hr-visa',
  templateUrl: './hr-visa.component.html',
  styleUrls: ['./hr-visa.component.css']
})
export class HrVisaComponent implements OnInit {
  responses: Array<VisaStatusResponse>;
  applications: Array<ApplicationResponse>;

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
}
