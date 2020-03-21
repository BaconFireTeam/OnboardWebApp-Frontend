import { Injectable } from '@angular/core';
import { Employee, Address, Contact, Visa, DriverLicense } from 'src/app/shared/domain/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee: Employee = new Employee();

  constructor() {
    this.employee.addressList = [];
    this.employee.contacts = [];
    this.employee.visa = new Visa();
    this.employee.driverLicense = new DriverLicense();
   }
  
  setFirstName(firstName: string) {
    this.employee.firstname = firstName;
  }

  setLastName(lastName: string) {
    this.employee.lastname = lastName;
  }

  setMiddleName(middleName: string) {
    this.employee.middlename = middleName;
  }

  setEmail(email: string){
    this.employee.email = email;
  }

  setCellPhone(cellPhone: string){
    this.employee.cellphone = cellPhone;
  }

  setAltPhone(altPhone: string) {
    this.employee.alternatephone = altPhone;
  }

  setGender(gender: string) {
    this.employee.gender = gender;
  }

  setSsn(ssn: string){
    this.employee.ssn = ssn;
  }

  setDob(dob: string){
    this.employee.dob = dob;
  }

  setVisa(visa: Visa){
    this.employee.visa = visa;
  }

  setDriveLicense(driverLicense: DriverLicense) {
    this.employee.driverLicense = driverLicense;
  }

  addAddress(address: Address){
    this.employee.addressList.push(address);
  }

  addContact(contact: Contact) {
    this.employee.contacts.push(contact);
  }

  getEmployee(){
    return this.employee;
  }
}
