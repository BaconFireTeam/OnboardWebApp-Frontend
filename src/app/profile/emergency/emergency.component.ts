import { Component, OnInit } from '@angular/core';
import { ApplicationDetailResponse,ContactResponse } from 'src/app/shared/domain/ApplicationDetailResponse';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {
  employee: ApplicationDetailResponse = new ApplicationDetailResponse();
  emergencyContactList: ContactResponse[];

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.employee = this.service.getEmployee();
    this.emergencyContactList = this.employee.emergencyContactList;
  }

}
