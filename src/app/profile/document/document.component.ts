import { Component, OnInit } from '@angular/core';
import { ApplicationDetailResponse,UploadFileResponse} from 'src/app/shared/domain/ApplicationDetailResponse';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  employee: ApplicationDetailResponse = new ApplicationDetailResponse();
  uploadFileResponseList: UploadFileResponse[];

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.employee = this.service.getEmployee();
    this.uploadFileResponseList = this.employee.uploadFileResponseList;
    console.log(this.uploadFileResponseList);
  }

}
