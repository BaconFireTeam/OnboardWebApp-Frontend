import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { House, Contact, Employee, Facility, FacilityReport, FacilityReportDetail } from '../shared/domain/hr-house.model';
import { HouseService } from '../shared/_service/house.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {

  title: string;
  description: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private houseService: HouseService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/employee/detailhouse']);
  }

  onSubmit() {
    console.log(this.title);
    console.log(this.description);
    console.log(this.houseService.employeeID);
    this.houseService.addReport(this.title,this.houseService.employeeID,this.description).subscribe(data=>{
      this.router.navigate(['/employee/detailhouse']);
    });
    
    
  }

}
