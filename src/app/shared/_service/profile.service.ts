import { Injectable } from '@angular/core';
import { EmployeeProfileResponse } from '../domain/VisaResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  getEmployees(){
    console.log("going to backend");
    return this.http.get('http://localhost:4200/api/hr/empProfiles').map((res: EmployeeProfileResponse) => {
    console.log(res);  
    return res;
    });
  }

  searchEmployees(search: string){
    let param: FormData = new FormData();
    param.append('search', search);
    return this.http.post('http://localhost:4200/api/hr/empProfiles', param).map((res: EmployeeProfileResponse) => {
    console.log(res);  
    return res;
    });
  }
}
