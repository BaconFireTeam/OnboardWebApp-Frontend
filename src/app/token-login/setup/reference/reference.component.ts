import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  address: string;
  email: string;
  relationship: string;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/emergency']);
  }

}
