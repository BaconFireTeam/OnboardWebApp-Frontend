import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationDetailResponse, ContactResponse, UploadFileResponse } from 'src/app/shared/domain/ApplicationDetailResponse';
import { EmpReviewApplicationService } from '../emp-review-application.service';
import { HrRevappService } from 'src/app/hr-review/hr-revapp.service';
import { Employee } from 'src/app/shared/domain/Employee';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  parentPath: string;
  currentPath: string;

  employee: Employee = new Employee();
  detail: ApplicationDetailResponse;
  formComment: string;

  employeeId: number;
  read: boolean = false;

  // person info
  firstname: string;
  lastname: string;
  middlename: string;
  email: string;
  cellphone: string;
  alternatephone: string;
  gender: string;
  ssn: string;
  dob: string;

  // address
  addressLine1: string;
  addressLine2: string;
  city: string;
  zipCode: string;
  stateName: string;
  stateAbbr: string;

  // driver license
  car: string;
  licenseNum: string;
  expirationDate: string;

  // visa
  visaType: string;
  visaStartDate: string;
  visaEndDate: string;

  // reference
  referenceEmail: string;

  // contact
  

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: EmpReviewApplicationService,
    private hrSev: HrRevappService) { 
    
  }

  ngOnInit(): void {
    this.route.parent.url.subscribe(url => this.parentPath = url[0].path);
    this.route.url.subscribe(url => this.currentPath = url[0].path);

    this.service.setEmployeeID(52)
    this.read = false;
    this.getDetail();
    this.getFormComment();
  }

  getFormComment() {
    this.service.getFormComment().subscribe(
      (res) => {
        this.formComment = res;
      }
    )
  }

  getDetail() {
    this.service.getApplicationDetail().subscribe(
      (res) => {
        console.log(res);
        this.detail = res;
      }
    )
  }

  onSubmit() {
    console.log(this.firstname);
  }

  goNext() {
    this.router.navigate(['employee/reviewfile']);
  }
}
