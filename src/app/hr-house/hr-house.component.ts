import { Component, OnInit } from '@angular/core';
import { House, Contact, Employee, Facility, FacilityReport, FacilityReportDetail } from '../shared/domain/hr-house.model';
import { HouseService } from '../shared/_service/house.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hr-house',
  templateUrl: './hr-house.component.html',
  styleUrls: ['./hr-house.component.css']
})
export class HrHouseComponent implements OnInit {
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

  constructor(private houseService: HouseService,private router: Router) { }

  gotoAccountList() {
    this.router.navigate(['/hr/detailhouse']);
  }

  ngOnInit() {
    this.houseService.listHouse().subscribe(data => {
      
      this.listHouse = data.list;
    });

    // this.houseService.getHrHouseDetail(this.houseID).subscribe(data => {
    //   this.house = data.house;
    //   this.contact = data.contact;
    //   this.list = data.list;
    //   this.facilities = data.facilities;
    // });

    // this.houseService.getHrReport(this.houseID).subscribe(data => {
    //   this.reports = data.reports;
    // });

    // this.houseService.getHrReportDetail(this.reportID).subscribe(data => {
    //   this.reportDetails = data.reportDetails;
    // })

  }

  detail(houseID:number) {
    this.houseService.houseID=houseID;
    this.router.navigate(['/hr/detailhouse']);
  }

}
