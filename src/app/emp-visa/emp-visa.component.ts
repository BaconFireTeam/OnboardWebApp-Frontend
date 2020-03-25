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
  appOpen: boolean;
  appStatus: string;
  visaAlert: boolean;
  visaMessage: string;
  employeeName: string;
  parentPath: string;
  currentPath: string;

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
  }

  onSubmit() {
    
  }

}
