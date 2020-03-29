import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { DriverLicense } from 'src/app/shared/domain/Employee';

@Component({
  selector: 'app-driving-status',
  templateUrl: './driving-status.component.html',
  styleUrls: ['./driving-status.component.css']
})
export class DrivingStatusComponent implements OnInit {
  hasLiscense: boolean = false;
  car:string;
  expDate: string;
  liscenseNum: string;
  liscense: File;
  driverLicense: DriverLicense = new DriverLicense();

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    if(this.employeeService.getEmployee().driverLicense.licenseNum != null) {
      this.car = this.employeeService.getEmployee().driverLicense.car;
      this.liscenseNum = this.employeeService.getEmployee().driverLicense.licenseNum;
      this.expDate = this.employeeService.getEmployee().driverLicense.expirationDate;
    }
  }

  goBack() {
    this.router.navigate(['employee/work-status']);
  }

  onSubmit() {
    this.driverLicense.car = this.car;
    this.driverLicense.licenseNum = this.liscenseNum;
    this.driverLicense.expirationDate = this.expDate;
    this.employeeService.setDriveLicense(this.driverLicense);
    console.log(this.employeeService.getEmployee());
    this.router.navigate(['employee/reference']);
  }

}
