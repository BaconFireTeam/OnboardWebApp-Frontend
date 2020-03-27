import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HrRevappService } from '../hr-revapp.service';
import { PersonalDocument } from 'src/app/shared/domain/PersonalDocumentResponse';

@Component({
  selector: 'app-application-files',
  templateUrl: './application-files.component.html',
  styleUrls: ['./application-files.component.css']
})

export class ApplicationFilesComponent implements OnInit {
  employeeId: number;

  parentPath: string;
  currentPath: string;
  headElements: string[] = ["No.", "File", "View", "Comment"];

  docList: PersonalDocument[];
  fileComments: Map<number, string>;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private revService: HrRevappService) { 
      this.fileComments = new Map();
    }

  ngOnInit(): void {
    this.route.parent.url.subscribe(url => this.parentPath = url[0].path);
    this.route.url.subscribe(url => this.currentPath = url[0].path);

    this.employeeId = this.revService.getEmployeeID()
    this.revService.getDocumentList(this.employeeId).subscribe(
      (res) => {
        console.log(res);
        this.docList = res;
      }
    )
  }

  goBack() {
    this.router.navigate(['hr/applicationdetail', this.revService.getEmployeeID()]);
  }

  setComment(event, id:number) {
    
    console.log(event.target.value);
    console.log(id);
    
    this.fileComments.set(id, event.target.value);
  }

  onRejectClick() {
    this.revService.setFileComment(this.fileComments)
  
    this.revService.rejectApplication(this.revService.getFormComment(), this.fileComments)
  }

  onApproveClick() {
    this.revService.updateApplication("closed").subscribe(
      (res) => {
        console.log(res);
      }
    );
  }
}
