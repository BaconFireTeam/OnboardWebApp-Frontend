import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ApplicationDetailResponse } from 'src/app/shared/domain/ApplicationDetailResponse';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

  constructor(private service: ProfileService) { }
  employee: ApplicationDetailResponse = new ApplicationDetailResponse();
  visaType: string;
  visaStartDate: string;
  visaEndDate: string;
  startDate: string;

  ngOnInit(): void {
    this.employee = this.service.getEmployee();
    this.visaType = this.employee.visaType;
    this.visaStartDate = this.employee.visaStartDate;
    this.visaEndDate = this.employee.visaEndDate;
    this.startDate = "Not Assigned";
  }

}
