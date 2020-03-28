import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../../register.service';
import { EmployeeService } from '../employee.service';
import { Address } from 'src/app/shared/domain/Employee';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  public firstName: string = '';
  public lastName: string = '';
  public middleName: string = '';
  public email: string = '';
  public gender: string;
  public cellPhone: string = '';
  public altPhone: string = '';
  public ssn: string = '';
  public dob: string = '';
  public address: Address = new Address();
  public addressLine1: string;
  public addressLine2: string;
  public city: string;
  public zipcode: string;
  public state: string;
  public stateAbbr: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private registerService: RegisterService, 
    private employeeService: EmployeeService) { }

  
  ngOnInit(): void {
    if(this.employeeService.getEmployee().firstname == null) {
      this.email = this.registerService.getEmail();
    } else {
      this.firstName = this.employeeService.getEmployee().firstname;
      this.lastName = this.employeeService.getEmployee().lastname;
      this.middleName = this.employeeService.getEmployee().middlename;
      this.email = this.employeeService.getEmployee().email;
      this.cellPhone = this.employeeService.getEmployee().cellphone;
      this.altPhone = this.employeeService.getEmployee().alternatephone;
      this.gender = this.employeeService.getEmployee().gender;
      this.ssn = this.employeeService.getEmployee().ssn;
      this.dob = this.employeeService.getEmployee().dob;
    }
  }

  chooseGender(event: any){
    this.gender = event.target.value;
  }

  onSubmit(){
    this.employeeService.setFirstName(this.firstName);
    this.employeeService.setLastName(this.lastName);
    this.employeeService.setMiddleName(this.middleName);
    this.employeeService.setEmail(this.email);
    this.employeeService.setCellPhone(this.cellPhone);
    this.employeeService.setAltPhone(this.altPhone);
    this.employeeService.setSsn(this.ssn);
    this.employeeService.setDob(this.dob);

    this.address.addressLine1 = this.addressLine1;
    this.address.addressLine2 = this.addressLine2;
    this.address.city = this.city;
    this.address.zipcode = this.zipcode;
    this.address.state = this.state;
    this.address.stateAbbr = this.stateAbbr;
    console.log(this.address);
    this.employeeService.addAddress(this.address);
    console.log(this.employeeService.getEmployee());

    this.router.navigate(['employee/work-status']);
  }
}
