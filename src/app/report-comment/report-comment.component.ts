import { Component, OnInit } from '@angular/core';
import { House, Contact, Employee, Facility, FacilityReport, FacilityReportDetail } from '../shared/domain/hr-house.model';
import { HouseService } from '../shared/_service/house.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-comment',
  templateUrl: './report-comment.component.html',
  styleUrls: ['./report-comment.component.css']
})
export class ReportCommentComponent implements OnInit {

  reportDetails: Array<FacilityReportDetail>;

  constructor(private router: Router, private houseService: HouseService) { }

  ngOnInit(): void {

    

    this.houseService.getHrReportDetail(this.houseService.report.id).subscribe(data => {
      this.reportDetails = data.reportDetails;
      
    });




  }

  addComment() {
    this.router.navigate(['/add-comment']);
  }

  

}
