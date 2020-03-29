import { Component, OnInit } from '@angular/core';
import { House, Contact, Employee, Facility, FacilityReport, FacilityReportDetail } from '../shared/domain/hr-house.model';
import { HouseService } from '../shared/_service/house.service';
import { ActivatedRoute, Router } from '@angular/router';
import {HrRevappService} from '../hr-review/hr-revapp.service';
import{ApplicationDetailResponse} from '../shared/domain/ApplicationDetailResponse';
  import { from } from 'rxjs';

@Component({
  selector: 'app-person-detail-employee',
  templateUrl: './person-detail-employee.component.html',
  styleUrls: ['./person-detail-employee.component.css']
})
export class PersonDetailEmployeeComponent implements OnInit {
  detail : ApplicationDetailResponse;
  
  constructor(private router: Router, private service: HrRevappService) { }

  ngOnInit(): void {
    this.service.getApplicationDetail(52).subscribe(data => {
      this.detail = data;
      console.log(this.detail);
    })
  }
  
  

  goBack() {
    this.router.navigate(['/employee/detailhouse']);
  }

}
