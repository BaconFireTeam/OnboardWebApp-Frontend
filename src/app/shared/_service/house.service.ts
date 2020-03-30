import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House, FacilityReport, Employee } from '../domain/hr-house.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HouseResponse, FacilityReportResponse, FacilityReportDetailResponse, ListHouseResponse, HouseHrResponse, ServiceStatus } from '../domain/hr-house.model';

@Injectable({
    providedIn: 'root'
})

export class HouseService {
    employeeID = 1;
    houseID: number;
    report: FacilityReport;
    createdDate: string;
    employee: Employee;

    constructor(private http: HttpClient) {
    }

    getHouseDetail(employeeID: number) {
        return this.http.post('http://localhost:4200/api/employee/housedetail', { employeeID }).map((res: HouseResponse) => {
            console.log(res);
            return res;
        });
    }

    getReport(employeeID: number) {
        return this.http.post('http://localhost:4200/api/employee/report', { employeeID }).map((res: FacilityReportResponse) => {
            console.log(res);
            return res;
        });
    }

    getReportDetail(reportID: number) {
        return this.http.post('http://localhost:4200/api/employee/reportdetail', { reportID }).map((res: FacilityReportDetailResponse) => {
            console.log(res);
            return res;
        });
    }

    listHouse() {
        console.log(123);
        return this.http.get('http://localhost:4200/api/hr/house').map((res: ListHouseResponse) => {
            console.log(res);

            return res;
        });
    }

    getHrHouseDetail(houseID: number) {
        return this.http.post('http://localhost:4200/api/hr/housedetail', { houseID }).map((res: HouseHrResponse) => {
            console.log(res);
            return res;
        });
    }

    getHrReport(houseID: number) {
        return this.http.post('http://localhost:4200/api/hr/report', { houseID }).map((res: FacilityReportResponse) => {
            console.log(res);
            return res;
        });
    }

    getHrReportDetail(reportID: number) {
        return this.http.post('http://localhost:4200/api/hr/reportdetail', { reportID }).map((res: FacilityReportDetailResponse) => {
            console.log(res);
            return res;
        });
    }

    addCommentHr(employeeID: number, reportID: number, comment: string, createdDate: string) {
        return this.http.post('http://localhost:4200/api/hr/addcomment', { employeeID, reportID, comment, createdDate }).map((res: ServiceStatus) => {
            console.log(res);
            return res;
        });
    }

    addComment(employeeID: number, reportID: number, comment: string, createdDate: string) {
        return this.http.post('http://localhost:4200/api/employee/addcomment', { employeeID, reportID, comment, createdDate }).map((res: ServiceStatus) => {
            console.log(res);
            return res;
        });
    }

    changeStatus(reportID: number) {
        return this.http.post('http://localhost:4200/api/hr/changeStatus', { reportID }).map((res: ServiceStatus) => {
            console.log(res);
            return res;
        });
    }

    addReport(title: string, employeeID: number, description: string) {
        console.log(1111);
        return this.http.post('http://localhost:4200/api/employee/addreport', { title, employeeID, description }).map((res: ServiceStatus) => {
            console.log(res);
            return res;
        });
    }

}