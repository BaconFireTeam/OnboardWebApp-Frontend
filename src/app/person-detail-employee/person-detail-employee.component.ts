import { Component, OnInit } from '@angular/core';
import { House, Contact, Employee, Facility, FacilityReport, FacilityReportDetail } from '../shared/domain/hr-house.model';
import { HouseService } from '../shared/_service/house.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-detail-employee',
  templateUrl: './person-detail-employee.component.html',
  styleUrls: ['./person-detail-employee.component.css']
})
export class PersonDetailEmployeeComponent implements OnInit {

  employee = this.houseService.employee;
  constructor(private router: Router, private houseService: HouseService) { }

  ngOnInit(): void {
    
    
  }

  goBack() {
    this.router.navigate(['/employee/detailhouse']);
  }

}

