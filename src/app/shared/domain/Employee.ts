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
    visa: Visa;
    driverLicense: DriverLicense;
    contacts: Contact[];
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
    isReference: boolean;
    isEmergency: boolean;
}