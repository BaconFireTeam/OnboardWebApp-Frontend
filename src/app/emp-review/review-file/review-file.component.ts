import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpReviewApplicationService } from '../emp-review-application.service';
import { FileComment } from 'src/app/shared/domain/FileCommentResponse';

@Component({
  selector: 'app-review-file',
  templateUrl: './review-file.component.html',
  styleUrls: ['./review-file.component.css']
})
export class ReviewFileComponent implements OnInit {
  employeeId: number;

  parentPath: string;
  currentPath: string;
  headElements: string[] = ["No.", "File", "View", "Comment"];

  docList: FileComment[];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: EmpReviewApplicationService) { }

  ngOnInit(): void {
    this.route.parent.url.subscribe(url => this.parentPath = url[0].path);
    this.route.url.subscribe(url => this.currentPath = url[0].path);

    this.service.setEmployeeID(52)

    this.service.getFileComment().subscribe(
      (res) => {
        this.docList = res;
      }
    )
  }

}
