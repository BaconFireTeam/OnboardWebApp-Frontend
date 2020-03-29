import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { House, Contact, Employee, Facility, FacilityReport, FacilityReportDetail } from '../shared/domain/hr-house.model';
import { HouseService } from '../shared/_service/house.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  
  comment: string;
  

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private houseService: HouseService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/report-detail']);
  }

  onSubmit() {
    console.log(this.comment);
    console.log(this.houseService.report.reportDate);
    console.log(this.houseService.report.id)
    console.log(this.houseService.employeeID);
    this.houseService.addComment(this.houseService.employeeID,this.houseService.report.id,this.comment,this.houseService.report.reportDate).subscribe(data=>{
      this.router.navigate(['/report-detail']);
    });
    //addComment(employeeID: number, reportID: number, comment: string, createdDate: string)
    
    
  }

}
