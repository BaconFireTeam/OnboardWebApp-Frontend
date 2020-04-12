import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ApplicationDetailResponse } from 'src/app/shared/domain/ApplicationDetailResponse';

@Component({
  selector: 'app-personal-contact',
  templateUrl: './personal-contact.component.html',
  styleUrls: ['./personal-contact.component.css']
})
export class PersonalContactComponent implements OnInit {

  constructor(private service: ProfileService) { }
  employee: ApplicationDetailResponse = new ApplicationDetailResponse();
  email: string;
  cellPhone: string;
  alternatePhone: string;

  ngOnInit(): void {
    this.employee = this.service.getEmployee();
    this.email = this.employee.email;
    this.cellPhone = this.employee.cellphone;
    this.alternatePhone = this.employee.alternatephone;
  }

}
