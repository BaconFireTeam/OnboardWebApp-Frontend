import { Component, OnInit } from '@angular/core';
import { EmpVisaService } from '../shared/_service/emp-visa.service';
import { Router, ActivatedRoute } from '@angular/router';


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
  parentPath: string;
  currentPath: string;
  visaFile: FileList;


  constructor(private empVisaService: EmpVisaService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.url.subscribe(url => this.parentPath = url[0].path);
    this.route.url.subscribe(url => this.currentPath = url[0].path);
    this.empVisaService.checkApplication(this.testid).subscribe(
      (res) => {
        console.log(res);
        this.appOpen = res.openOrPending;
        if(this.appOpen){
          this.appId = res.applicationWorkFlow.id;
          this.appStatus = res.applicationWorkFlow.status;
        }
      });
    this.empVisaService.checkVisaStatus(this.testid).subscribe(
      (res) => {
        console.log(res);
        this.visaAlert = true//res.needAlert;
        this.visaMessage = 'Hello World' //res.message;
        this.employeeName = 'Zack Yu'//res.employee.firstname + " " + res.employee.lastname;
      }
    );

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
