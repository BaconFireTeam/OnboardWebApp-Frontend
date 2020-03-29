import { Injectable } from '@angular/core';
import { ApplicationDetailResponse } from '../shared/domain/ApplicationDetailResponse';
import { Router } from '@angular/router';
import { HrRevappService } from '../hr-review/hr-revapp.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  employee : ApplicationDetailResponse;

  constructor(private router: Router, private service: HrRevappService) { 
    
  }

  setEmployee(e: ApplicationDetailResponse) {
    this.employee = e;
  }

  getEmployee() {
    return this.employee;
  }
}
