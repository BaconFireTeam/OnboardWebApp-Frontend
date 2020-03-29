import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Employee } from 'src/app/shared/domain/Employee';
import { ApplicationDetailResponse } from 'src/app/shared/domain/ApplicationDetailResponse';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  employee: ApplicationDetailResponse = new ApplicationDetailResponse();
  // person info
  firstname: string;
  lastname: string;
  middlename: string;
  email: string;

  // avatar

  gender: string;
  ssn: string;
  dob: string;

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.employee = this.service.getEmployee();
    console.log("name card: "+ this.employee);

    this.firstname = this.employee.firstname;
    this.middlename = this.employee.middlename;
    this.lastname = this.employee.lastname;
    this.email = this.employee.email;
    this.gender = this.employee.gender;
    this.ssn = this.employee.ssn;
    this.dob = this.employee.dob;
  }

}
