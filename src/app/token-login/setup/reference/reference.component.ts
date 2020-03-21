import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/shared/domain/Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {
  contact: Contact = new Contact();
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  address: string;
  email: string;
  relationship: string;


  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/driver']);
  }

  onSubmit() {
    this.router.navigate(['/emergency']);
  }

}
