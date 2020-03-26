import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, Address, Employee, Reference } from 'src/app/shared/domain/Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {
  /*
  contact: Contact = new Contact();
  address: Address = new Address();
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  zipcode: string;
  state: string;
  stateAbbr: string;
  email: string;
  relationship: string;
*/

  email: string = "";
  ref: Reference;

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.contact.address = [];
    this.ref = new Reference();
  }

  goBack() {
    this.router.navigate(['/driver']);
  }

  onSubmit() {
    /*
    this.contact.firstname = this.firstName;
    this.contact.lastname = this.lastName;
    this.contact.middlename = this.middleName;
    this.contact.email = this.email;
    this.contact.cellphone = this.phone;
    this.contact.relationship = this.relationship;
    this.contact.isReference = true;

    this.address.addressLine1 = this.addressLine1;
    this.address.addressLine2 = this.addressLine2;
    this.address.city = this.city;
    this.address.zipcode = this.zipcode;
    this.address.state = this.state;
    this.address.stateAbbr = this.stateAbbr;

    this.contact.address.push(this.address);

    this.employeeService.addContact(this.contact);
*/

    // console.log(this.employeeService.getEmployee());
    
    this.ref.email = this.email;
    this.employeeService.setReference(this.ref);
    
    this.router.navigate(['/emergency']);
  }

}
