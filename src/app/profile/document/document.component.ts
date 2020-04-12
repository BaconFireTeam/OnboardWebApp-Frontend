import { Component, OnInit } from '@angular/core';
import { ApplicationDetailResponse,UploadFileResponse} from 'src/app/shared/domain/ApplicationDetailResponse';
import { ProfileService } from '../profile.service';
import { PersonalDocumentResponse,PersonalDocument } from 'src/app/shared/domain/PersonalDocumentResponse';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  employee: PersonalDocument[];
  

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.employee = this.service.getEmployee2();
    
  }

}
