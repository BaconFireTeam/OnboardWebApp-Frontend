import { Component, OnInit } from '@angular/core';
import { EmpVisaService } from '../shared/_service/emp-visa.service';


@Component({
  selector: 'app-emp-visa',
  templateUrl: './emp-visa.component.html',
  styleUrls: ['./emp-visa.component.css']
})
export class EmpVisaComponent implements OnInit {
  testid: number = 4;
  appId: number;
  appOpen: boolean;
  appStatus: string;
  visaAlert: boolean;
  visaMessage: string;
  employeeName: string;
  visaFile: FileList;

  constructor(private empVisaService: EmpVisaService) { }

  ngOnInit(): void {
    this.empVisaService.checkApplication(this.testid).subscribe(
      (res) => {
        console.log(res);
        this.appOpen = res.openOrPending;
        if(this.appOpen){
          this.appId = res.applicationWorkFlow.id;
          this.appStatus = res.applicationWorkFlow.status;
        }
      });
    if(this.appStatus !== 'pending') {
      this.empVisaService.checkVisaStatus(this.testid).subscribe(
        (res) => {
          console.log(res);
          this.visaAlert = res.needAlert;
          this.visaMessage = res.message;
          this.employeeName = res.employee.firstname + " " + res.employee.lastname;
        }
      );
    }
  }

  setFile(event){
    this.visaFile = event.target.files;

  }

  onSubmit() {
    this.empVisaService.submitApplication(this.visaFile, this.testid, 'OPT').subscribe(
      (res)=>{
        if(res){
          this.empVisaService.updateAppStatus(this.appId).subscribe(
            (appRes)=>{
              if(this.appOpen){
                this.appId = appRes.applicationWorkFlow.id;
                this.appStatus = appRes.applicationWorkFlow.status;
              }
            }
          );
        }
      }
    )
    
  }

  startApplication(){
    this.empVisaService.startApplication(this.testid).subscribe(
      (res) => {
        console.log(res);
        this.appOpen = res.openOrPending;
        if(this.appOpen){
          this.appId = res.applicationWorkFlow.id;
          this.appStatus = res.applicationWorkFlow.status;
        }
      });
  }
}
