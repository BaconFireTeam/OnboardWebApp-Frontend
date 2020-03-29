import { ServiceStatus } from '../domain/Response.model';

export class UploadFileResponse {
    employeeID: number;
    type: string;
    fileName: string;
    fileDownloadUri: string;
}

export class DigitalDocumentResponse {
    type: string;
    required: boolean;
    templateLocationi: string;
    description: string;
}

export class GetDocumentsListResponse {
    serviceStatus: ServiceStatus;
    uploadFileResponseList: Array<UploadFileResponse>;
    digitalDocumentResponseList: Array<DigitalDocumentResponse>;
}