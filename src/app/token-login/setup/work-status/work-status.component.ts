import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  selectPapers(event: any){
    this.workStatus = event.target.value;
  }

  onSubmit(){
    if(this.otherStatus !== '') {
      this.workStatus = this.otherStatus;
    }
  }
}
