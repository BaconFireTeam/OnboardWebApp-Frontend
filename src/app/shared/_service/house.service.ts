import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../domain/hr-house.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HouseResponse, FacilityReportResponse, FacilityReportDetailResponse, ListHouseResponse, HouseHrResponse } from '../domain/hr-house.model';

@Injectable({
    providedIn: 'root'
})

export class HouseService {
    employeeID=1;
    houseID=1;

    constructor(private http: HttpClient) {
    }

    getHouseDetail(employeeID: number) {
        return this.http.post('http://localhost:4200/employee/housedetail', { employeeID }).map((res: HouseResponse) => {
            console.log(res);
            return res;
        });
    }

    getReport(employeeID: number) {
        return this.http.post('http://localhost:4200/employee/report', { employeeID }).map((res: FacilityReportResponse) => {
            console.log(res);
            return res;
        });
    }

    getReportDetail(reportID: number) {
        return this.http.post('http://localhost:4200/employee/reportdetail', { reportID }).map((res: FacilityReportDetailResponse) => {
            console.log(res);
            return res;
        });
    }

    listHouse() {
        console.log(123);
        return this.http.get('http://localhost:4200/hr/house').map((res: ListHouseResponse) => {
            console.log(res);

            return res;
        });
    }

    getHrHouseDetail(houseID: number) {
        return this.http.post('http://localhost:4200/hr/housedetail', { houseID }).map((res: HouseHrResponse) => {
            console.log(res);
            return res;
        });
    }

    getHrReport(houseID: number) {
        return this.http.post('http://localhost:4200/hr/report', { houseID }).map((res: FacilityReportResponse) => {
            console.log(res);
            return res;
        });
    }

    getHrReportDetail(reportID: number) {
        return this.http.post('http://localhost:4200/hr/reportdetail', { reportID }).map((res: FacilityReportDetailResponse) => {
            console.log(res);
            return res;
        });
    }

}