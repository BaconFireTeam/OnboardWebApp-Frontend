import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
  relationship: string;
  second: boolean = false;
  firstName2: string;
  lastName2: string;
  middleName2: string;
  phone2: string;
  email2: string;
  relationship2: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addContact(){
    this.second = !this.second;
  }

  onSubmit() {
    this.router.navigate(['/documents']);
  }

}
