import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, Employee } from 'src/app/shared/domain/Employee';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})

export class EmergencyContactComponent implements OnInit {
  contact1: Contact = new Contact();
  contact2: Contact = new Contact();
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

  employee: Employee;

  constructor(private route: ActivatedRoute
    , private router: Router
    , private employeeService: EmployeeService
    , private http: HttpClient) { }

  ngOnInit(): void {
  }

  addContact(){
    this.second = !this.second;
  }

  goBack() {
    this.router.navigate(['/reference']);
  }

  onSubmit() {
    this.contact1.firstname = this.firstName;
    this.contact1.lastname = this.lastName;
    this.contact1.middlename = this.middleName;
    this.contact1.email = this.email;
    this.contact1.cellphone = this.phone;
    this.contact1.relationship = this.relationship;
    this.contact1.isEmergency = true;
    this.employeeService.addContact(this.contact1);

    if(this.second) {
      this.contact2.firstname = this.firstName2;
      this.contact2.lastname = this.lastName2;
      this.contact2.middlename = this.middleName2;
      this.contact2.email = this.email2;
      this.contact2.cellphone = this.phone2;
      this.contact2.relationship = this.relationship2;
      this.contact2.isEmergency = true;
      this.employeeService.addContact(this.contact2);
    }

    console.log(this.employeeService.getEmployee());    

    this.employee = this.employeeService.getEmployee();
    this.employeeService.submitForm(this.employee).subscribe(
      (res) => {
        console.log(res);
        console.log(res.employeeId);
        this.employeeService.setEmployeeId(res.employeeId);
        this.router.navigate(['/documents']);
      }
    );
  }

}
