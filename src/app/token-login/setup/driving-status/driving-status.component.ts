import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-driving-status',
  templateUrl: './driving-status.component.html',
  styleUrls: ['./driving-status.component.css']
})
export class DrivingStatusComponent implements OnInit {
  hasLiscense: boolean = false;
  expDate: string;
  liscenseNum: string;
  liscense: File;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/reference']);
  }

}
