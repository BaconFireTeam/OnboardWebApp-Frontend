import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Application, OngoingApplicationResponse } from '../../shared/domain/OngoingApplicationResponse';
import { HrRevappService } from '../hr-revapp.service';

@Component({
  selector: 'app-hr-review-application',
  templateUrl: './hr-review-application.component.html',
  styleUrls: ['./hr-review-application.component.css']
})
export class HrReviewApplicationComponent implements OnInit {
  applicationList: Application[];  
  parentPath: string;
  currentPath: string;
  headElements: string[] = ["No.", "NAME", "STATUS", "TYPE", "DETAIL"];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private hrRevService: HrRevappService) { }

  ngOnInit(): void {
    this.route.parent.url.subscribe(url => this.parentPath = url[0].path);
    this.route.url.subscribe(url => this.currentPath = url[0].path);

    this.hrRevService.getApplicationList().subscribe(
      (res) => {
        console.log(res);
        this.applicationList = res;
      }
    )
  }

  getDetail(id: number, appid: number) {
    console.log(id);
    this.hrRevService.setEmployeeID(id);
    console.log("appid: " + appid);
    this.hrRevService.setAppID(appid);
    this.router.navigate(['hr/applicationdetail']);
  }
}
