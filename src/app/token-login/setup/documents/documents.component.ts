import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DigitalDocuments } from 'src/app/shared/domain/DocumentResponse';
import { EmployeeService } from '../employee.service'
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})

export class DocumentsComponent implements OnInit {
  documentList: DigitalDocuments[];
  uploadFile: string[] = [];
  files: FormData = new FormData();    

  constructor(private route: ActivatedRoute
    , private router: Router
    ,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getDocument().subscribe(
      (res) => {
        console.log(res)
        this.documentList = res;
      }
    );
  }

  onSubmit() {
    let id = this.employeeService.getEmployeeId();
    console.log(id);
    this.employeeService.submitApplication(this.uploadFile, id, 'Onboarding').subscribe(
      (res) => {
        console.log(res)
      }
    )
  }

  setFile(event, i: number){
    console.log(i);
    this.uploadFile[i] = event.target.files[0];
    
    // this.files.append("files", event.target.files[0]);
    console.log(this.uploadFile[i])
  }
}
