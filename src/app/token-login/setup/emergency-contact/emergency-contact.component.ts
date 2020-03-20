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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addContact(){
    console.log("figure out how to add more contcts");
  }

  onSubmit() {
    this.router.navigate(['/documents']);
  }

}
