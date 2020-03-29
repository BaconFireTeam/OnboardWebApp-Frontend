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
  
  constructor(private hrRevServ: HrRevappService,
    private service: ProfileService) { }

  ngOnInit(): void {
    this.hrRevServ.getApplicationDetail(52).subscribe(data => {
      
      this.service.setEmployee(data);
    })
  }

}
