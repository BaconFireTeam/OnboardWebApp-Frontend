import { Component, OnInit } from '@angular/core';
import { House, Contact, Employee, Facility, FacilityReport, FacilityReportDetail } from '../shared/domain/hr-house.model';
import { HouseService } from '../shared/_service/house.service';

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


  constructor(private houseService: HouseService) { }

  ngOnInit(){
    this.houseService.getHrHouseDetail(this.houseService.houseID).subscribe(data => {
      this.house = data.house;
      this.contact = data.contact;
      this.list = data.list;
      this.facilities = data.facilities;
    });
  }

}
