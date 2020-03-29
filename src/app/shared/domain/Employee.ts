export class Employee {
    id: number;
    firstname: string;
    lastname: string;
    middlename: string;
    email: string;
    cellphone: string;
    alternatephone: string;
    gender: string;
    ssn: string;
    dob: string;

    addressList: Address[];
    visaStartDate: string;
    visaEndDate: string;

    visa: Visa;
    driverLicense: DriverLicense;
    reference: Reference;
    emergencyContactList: Contact[];
}

export class Address {
    addressLine1: string;
    addressLine2: string;
    city: string;
    zipcode: string;
    state: string;
    stateAbbr: string;
}

export class DriverLicense {
    car: string;
    licenseNum: string;
    expirationDate: string;
}

export class Visa {
    type: string;
    startDate: string;
    endDate: string;
}

export class Reference {
    email: string;
}

export class Contact {
    firstname: string;
    lastname: string;
    middlename: string;
    email: string;
    cellphone: string;
    alternatephone: string;
    ssn: string;
    dob: string;
    
    address: Address[];
    relationship: string;
    isReference: boolean;
    isEmergency: boolean;
}

export class ApplicationWorkFlow {
    id: number;
    employeeID: number;
    createdDate: string;
    modificationDate: string;
    status: string;
    comments: string;
    type: string;
}