import { ServiceStatus } from './Response.model';

export class PersonalDocumentResponse {
    serviceStatus: ServiceStatus;
    uploadFileResponseList: PersonalDocument[];
}

export class PersonalDocument {
    fileID: number;
    employeeID: number;
    type: string;
    fileName: string;
    fileDownloadUri: string;
}