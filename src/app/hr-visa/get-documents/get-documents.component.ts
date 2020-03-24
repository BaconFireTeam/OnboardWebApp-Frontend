import { Component, OnInit, Input } from '@angular/core';
import { UploadFileResponse } from 'src/app/shared/_service/FileResponse';

@Component({
  selector: 'app-get-documents',
  templateUrl: './get-documents.component.html',
  styleUrls: ['./get-documents.component.css']
})
export class GetDocumentsComponent implements OnInit {

  @Input() docRes:UploadFileResponse;
  
  constructor() { }

  ngOnInit(): void {
  }

}
