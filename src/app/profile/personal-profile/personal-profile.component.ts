import { Component, OnInit } from '@angular/core';
import { HrRevappService } from 'src/app/hr-review/hr-revapp.service';
import { ProfileService } from '../profile.service';
import { ApplicationDetailResponse } from 'src/app/shared/domain/ApplicationDetailResponse';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {
  employee : ApplicationDetailResponse;
  id: number;

  constructor(private hrRevServ: HrRevappService,
    private service: ProfileService) { }

  ngOnInit(): void {
    this.id = this.service.getEmployeeId();
    this.hrRevServ.getApplicationDetail(this.id).subscribe(data => {
      
      this.service.setEmployee(data);
    })
    this.hrRevServ.getDocumentList(52).subscribe(data => {
      
      this.service.setEmployee2(data);
    })
  }

}
