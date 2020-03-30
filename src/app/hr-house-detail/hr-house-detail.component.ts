import { Component, OnInit } from '@angular/core';
import { House, Contact, Employee, Facility, FacilityReport, FacilityReportDetail } from '../shared/domain/hr-house.model';
import { HouseService } from '../shared/_service/house.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-hr-house-detail',
  templateUrl: './hr-house-detail.component.html',
  styleUrls: ['./hr-house-detail.component.css']
})
export class HrHouseDetailComponent implements OnInit {
  house: House;
  employeeID: number;
  contact: Contact;
  list: Array<Employee>;
  facilities: Array<Facility>;
  reports: Array<FacilityReport>;
  reportDetails: Array<FacilityReportDetail>;
  reportID: number;
  listHouse: House[];
  houseID: number;


  constructor(private router: Router, private houseService: HouseService,
    private personalProfileService: ProfileService) { }

  ngOnInit() {
    this.houseService.getHrHouseDetail(this.houseService.houseID).subscribe(data => {
      this.house = data.house;
      this.contact = data.contact;
      this.list = data.list;
      this.facilities = data.facilities;
    });

    this.houseService.getHrReport(this.houseService.houseID).subscribe(data => {
      this.reports = data.reports;
    });





  }

  changeStatus(report: FacilityReport) {
    this.houseService.changeStatus(report.id).subscribe(data => {
      this.houseService.getHrReport(this.houseService.houseID).subscribe(data => {
        this.reports = data.reports;
      });
    this.router.navigate(['/hr/detailhouse']);
    });
  }

  comment(report: FacilityReport) {
    this.houseService.report = report;
    this.router.navigate(['/report-detail']);
  }

  personPage(id: number){
    this.personalProfileService.setEmployeeID(id);
    this.router.navigate(['person-detail-employee']);
  }

}
