import { Injectable } from '@angular/core';
import { Employee, Address, Contact, Visa, DriverLicense, Reference } from 'src/app/shared/domain/Employee';
import { HttpClient } from '@angular/common/http';
import { GetDocumentsListResponse } from 'src/app/shared/domain/GetDocumentsListResponse.model';
import { Response } from 'src/app/shared/domain/Response.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee: Employee = new Employee();
  employeeID: number;

  constructor(private http: HttpClient) {
    this.employee.addressList = [];
    this.employee.emergencyContactList = [];
    this.employee.visa = new Visa();
    this.employee.driverLicense = new DriverLicense();
    this.employee.reference = new Reference();
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

  setReference(reference: Reference) {
    this.employee.reference = reference;
  }

  setDriveLicense(driverLicense: DriverLicense) {
    this.employee.driverLicense = driverLicense;
  }

  addAddress(address: Address){
    this.employee.addressList.push(address);
  }

  addContact(contact: Contact) {
    this.employee.emergencyContactList.push(contact);
  }

  getEmployee(){
    return this.employee;
  }

  submitForm(employee: Employee) {
    console.log(employee)
    return this.http.post('http://localhost:4200/onboard-application', {employee}).map((res: Response) => {
      console.log(res);
    
      return res;
    });
  }

  setEmployeeId(id: number) {
    this.employeeID = id;
  }

  getEmployeeId(): number {
    return this.employeeID;
  }

  getDocument() {
    return this.http.get('http://localhost:4200/getDigitalDocument', {params: {type: "Onboarding"}})
      .map((docRes: GetDocumentsListResponse) => {
        console.log(docRes)
        return docRes.digitalDocumentResponseList;  
      });
  }
  

  submitApplication(uploadFiles: string[], employeeID: number, type: string){
    let files: FormData = new FormData();
    for (let i = 0; i < uploadFiles.length; i++) {
      files.append('files', uploadFiles[i]);
    }
    files.append('employeeID', employeeID+"");
    files.append('type', type);
    return this.http.post('http://localhost:4200/uploadMultipleFiles', files).map((docRes: GetDocumentsListResponse[]) => {
      return docRes;
    });
  }
}
