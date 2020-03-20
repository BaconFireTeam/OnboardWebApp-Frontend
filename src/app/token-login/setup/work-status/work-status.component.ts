import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-work-status',
  templateUrl: './work-status.component.html',
  styleUrls: ['./work-status.component.css']
})
export class WorkStatusComponent implements OnInit {
status: boolean = false;
startDate: string;
endDate: string;
workStatus: string;
otherStatus: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  selectPapers(event: any){
    this.workStatus = event.target.value;
  }

  onSubmit(){
    if(this.otherStatus !== '') {
      this.workStatus = this.otherStatus;
    }
    this.router.navigate(['/driver']);
  }
}
