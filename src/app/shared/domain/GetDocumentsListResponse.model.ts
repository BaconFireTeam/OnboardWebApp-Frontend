import { DigitalDocuments } from './DocumentResponse'

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

export class GetDocumentsListResponse {
    serviceStatus: ServiceStatus;
    digitalDocumentResponseList: Array<DigitalDocuments>;
}