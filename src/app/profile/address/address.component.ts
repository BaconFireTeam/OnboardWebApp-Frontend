import { Component, OnInit } from '@angular/core';
import { ApplicationDetailResponse } from 'src/app/shared/domain/ApplicationDetailResponse';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  employee: ApplicationDetailResponse = new ApplicationDetailResponse();

  // address
  addressLine1: string;
  addressLine2: string;
  city: string;
  zipCode: string;
  stateName: string;
  stateAbbr: string;

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.employee = this.service.getEmployee();

    this.addressLine1 = this.employee.addressLine1;
    this.addressLine2 = this.employee.addressLine2;
    this.city = this.employee.city;
    this.zipCode = this.employee.zipCode;
    this.stateName = this.employee.stateName;
    this.stateAbbr = this.employee.stateAbbr;
  }

}
