import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HrRevappService } from '../hr-revapp.service';
import 'rxjs/add/operator/switchMap';
import { ApplicationDetailResponse } from 'src/app/shared/domain/ApplicationDetailResponse';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  parentPath: string;
  currentPath: string;

  detail: ApplicationDetailResponse;
  employeeId: number;

  formComment: string;
  fileComment: string;

  read: boolean = true;
  
  constructor(private router : Router,
    private route : ActivatedRoute,
    private revService: HrRevappService) { }

  ngOnInit(): void {
    this.route.parent.url.subscribe(url => this.parentPath = url[0].path);
    this.route.url.subscribe(url => this.currentPath = url[0].path);
  
    this.employeeId = this.revService.getEmployeeID()
  
    this.revService.getApplicationDetail(this.employeeId).subscribe(
      (res) => {
        console.log(res);
        this.detail = res;
      }
    )
  }

  onFormCommentSubmit() {
    console.log(this.formComment);
    this.revService.setFormComment(this.formComment);
    console.log(this.employeeId);
  }

  goNext() {
    this.router.navigate(['hr/filesdetail']);
  }
}
