import { Component, OnInit } from '@angular/core';
import { House, Contact, Employee, Facility, FacilityReport, FacilityReportDetail } from '../shared/domain/hr-house.model';
import { HouseService } from '../shared/_service/house.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  parentPath: string;
  currentPath: string;
  house: House;
  employeeID: number;
  contact: Contact;
  list: Array<Employee>;
  facilities: Array<Facility>;
  reports: Array<FacilityReport>;
  reportDetails: Array<FacilityReportDetail>;
  reportID: number;

  constructor(private houseService: HouseService, private router: Router,private route: ActivatedRoute,private personalProfileService: ProfileService) { }

  ngOnInit(){

    this.route.parent.url.subscribe(url => this.parentPath = url[0].path);
    this.route.url.subscribe(url => this.currentPath = url[0].path);


    this.houseService.getHouseDetail(this.houseService.employeeID).subscribe(data => {
      console.log(123);
      this.house = data.house;
      this.contact = data.contact;
      this.list = data.list;
    });

    this.houseService.getReport(this.houseService.employeeID).subscribe(data => {
      this.reports = data.reports;
    })

    // this.houseService.getReportDetail(this.reportID).subscribe(data =>{
    //   this.reportDetails = data.reportDetails;
    // })
  }
  comment(report:FacilityReport) {
    // this.reportID=reportID;
    this.houseService.report=report;
    this.router.navigate(['/report-detail']);
  }

  addReport() {
    this.router.navigate(['/add-report']);
  }

  personPage(id: number){
    this.personalProfileService.setEmployeeID(id);
    this.router.navigate(['person-detail-employee']);
  }
}
