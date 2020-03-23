import { Component, OnInit } from '@angular/core';
import { EmpVisaService } from '../shared/_service/emp-visa.service';


@Component({
  selector: 'app-emp-visa',
  templateUrl: './emp-visa.component.html',
  styleUrls: ['./emp-visa.component.css']
})
export class EmpVisaComponent implements OnInit {
  testid: number = 4;
  appOpen: boolean;
  appStatus: string;
  visaAlert: boolean;
  visaMessage: string;
  employeeName: string;

  constructor(private empVisaService: EmpVisaService) { }

  ngOnInit(): void {
    this.empVisaService.checkApplication(this.testid).subscribe(
      (res) => {
        console.log(res);
        this.appOpen = res.openOrPending;
        if(this.appOpen){
          this.appStatus = res.applicationWorkFlow.status;
        }
      });
    this.empVisaService.checkVisaStatus(this.testid).subscribe(
      (res) => {
        console.log(res);
        this.visaAlert = res.needAlert;
        this.visaMessage = res.message;
        this.employeeName = res.employee.firstname + " " + res.employee.lastname;
      }
    );
  }

  onSubmit() {
    
  }

}
