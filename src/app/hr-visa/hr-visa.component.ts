import { Component, OnInit } from '@angular/core';
import { HrVisaService } from '../shared/_service/hr-visa.service';
import { VisaStatusResponse } from '../shared/domain/VisaResponse';

@Component({
  selector: 'app-hr-visa',
  templateUrl: './hr-visa.component.html',
  styleUrls: ['./hr-visa.component.css']
})
export class HrVisaComponent implements OnInit {
  responses: Array<VisaStatusResponse>

  constructor(private hrVisaService: HrVisaService) { }

  ngOnInit(): void {
    this.hrVisaService.checkVisas().subscribe(
      (res)=>{
        this.responses = res;
        console.log(this.responses);
      });
  }

}
