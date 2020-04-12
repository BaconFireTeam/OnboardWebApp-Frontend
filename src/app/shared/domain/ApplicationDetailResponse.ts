export class ApplicationDetailResponse {
    // person info
    firstname: string;
    lastname: string;
    middlename: string;
    email: string;
    cellphone: string;
    alternatephone: string;
    gender: string;
    ssn: string;
    dob: string;

    // address
    addressLine1: string;
    addressLine2: string;
    city: string;
    zipCode: string;
    stateName: string;
    stateAbbr: string;

    // driver license
    car: string;
    licenseNum: string;
    expirationDate: string;

    // visa
    visaType: string;
    visaStartDate: string;
    visaEndDate: string;

    // reference
    referenceEmail: string;

    // contact
    emergencyContactList: ContactResponse[];

    uploadFileResponseList: UploadFileResponse[];
}

export class ContactResponse {
    firstname: string;
    lastname: string;
    middlename: string;
    email: string;
    cellphone: string;
    alternatephone: string;
    gender: string;
    relationship: string;
}

export class UploadFileResponse {
    employeeID: number;
    type: string;
    fileName: string;
    fileDownloadUri: string;
}