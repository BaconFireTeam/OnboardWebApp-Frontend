export class ServiceStatus {
    statusCode: string;
    success: boolean;
    errorMessage: string;

    constructor(statusCode: string, success: boolean, errorMessage: string) {
        this.errorMessage = errorMessage;
        this.success = success;
        this.statusCode = statusCode;
    }
}


export class HouseRequest {
    employeeID: number;
    constructor(employeeID: number) { this.employeeID = employeeID }
}

export class HouseResponse {
    serviceStatus: ServiceStatus;
    house: House;
    contact: Contact;
    list: Array<Employee>;
}

export class HouseHrRequest {
    houseID: number;
    constructor(houseID: number) { this.houseID = houseID }
}

export class HouseHrResponse {
    serviceStatus: ServiceStatus;
    house: House;
    contact: Contact;
    list: Array<Employee>;
    facilities: Array<Facility>;
}

export class FacilityReportDetailResponse {
    serviceStatus: ServiceStatus;
    reportDetails: Array<FacilityReportDetail>;
}

export class FacilityReportResponse {
    serviceStatus: ServiceStatus;
    reports: Array<FacilityReport>;
}

export class ListHouseResponse {
    serviceStatus: ServiceStatus;
    list: Array<House>;
}



export class House {
    id: number;
    contactID: number;
    address: string;
    numberOfPerson: string;
    maxPerson: string;
}

export class Employee {
    id: number;
    title: string;
    managerID: string;
    startDate: string;
    endDate: string;
    avatar: string;
    car: string;
    visaStatusID: string;
    visaStartDate: string;
    visaEndDate: string;
    driverLisence: string;
    driverLisence_ExpirationDate: string;
    houseID: number;
    firstname: string;
    lastname: string;
    email: string;
    cellphone: string;
    gender:string;
}
export class Facility {
    id: number;
    type: string;
    description: string;
    quantity: string;
    houseID: number;
}
export class Contact {
    id: number;
    relationship: string;
    title: string;
    isReference: string;
    isEmergency: string;
    isLandlord: string;
    firstname: string;
    lastname: string;
    email:string;
    cellphone:string;
}
export class FacilityReport {
    id: number;
    title: string;
    employeeID: number;
    reportDate: string;
    description: string;
    status: string;
}
export class FacilityReportDetail {
    id: number;
    reportID: number;
    employeeID: number;
    comments: string;
    createdDate: string;
    lastModificationDate: string;
}
export class Person {
    id: number;
    firstname: string;
    lastname: string;
    middlename: string;
    email: string;
    cellphone: string;
    alternatephone: string;
    gender: string;
    SSN: string;
    DOB: string;
}

