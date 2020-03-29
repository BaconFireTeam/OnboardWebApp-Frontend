import { Injectable } from '@angular/core';
import { ApplicationDetailResponse} from '../shared/domain/ApplicationDetailResponse';
import { Router } from '@angular/router';
import { HrRevappService } from '../hr-review/hr-revapp.service';
import { PersonalDocumentResponse,PersonalDocument } from '../shared/domain/PersonalDocumentResponse';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  employee : ApplicationDetailResponse;
  employee2:PersonalDocument[];
  

  constructor(private router: Router, private service: HrRevappService) { 
    
  }

  setEmployee(e: ApplicationDetailResponse) {
    this.employee = e;
  }

  getEmployee() {
    return this.employee;
  }

  setEmployee2(e: PersonalDocument[]) {
    this.employee2 = e;
  }

  getEmployee2() {
    return this.employee2;
  }
}
