import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Visa } from 'src/app/shared/domain/Employee';

@Component({
  selector: 'app-work-status',
  templateUrl: './work-status.component.html',
  styleUrls: ['./work-status.component.css']
})
export class WorkStatusComponent implements OnInit {
status: boolean = false;
startDate: string = '';
endDate: string = '';
workStatus: string;
otherStatus: string = null;
visa: Visa = new Visa();

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    if(this.employeeService.getEmployee().visa.type != null) {
      this.workStatus = this.employeeService.getEmployee().visa.type;
      this.otherStatus = this.employeeService.getEmployee().visa.type;
      this.startDate = this.employeeService.getEmployee().visa.startDate;
      this.endDate = this.employeeService.getEmployee().visa.endDate;
    }
    this.workStatus = 'H1-B';
  }

  selectPapers(event: any){
    this.workStatus = event.target.value;
    console.log(this.workStatus);
    // this.employeeService.setVisaType(this.workStatus);
  }

  goBack(){
    this.router.navigate(['employee/personal']);
  }

  onSubmit(){
    if(this.otherStatus !== null && this.workStatus == 'Other') {
      console.log(this.workStatus);
      this.workStatus = this.otherStatus;
    }
    if(this.workStatus == 'Citizen' || this.workStatus == 'Green Card') {
      this.visa.startDate = '';
    this.visa.endDate = '';
    }
    console.log(this.workStatus);
    this.visa.type = this.workStatus;
    this.visa.startDate = this.startDate;
    this.visa.endDate = this.endDate;
    this.employeeService.setVisa(this.visa);
    console.log(this.employeeService.getEmployee());
    this.router.navigate(['employee/driver']);
  }
}
