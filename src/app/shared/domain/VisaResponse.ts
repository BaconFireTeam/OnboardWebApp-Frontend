import { Employee, ApplicationWorkFlow } from './Employee';

export class VisaStatusResponse {
    employee: Employee;
    message: string;
    needAlert: boolean;
    statusList: Array<VisaStatusResponse>;
}

export class ApplicationResponse {
    employeeName: string;
    applicationWorkFlow: ApplicationWorkFlow;
    openOrPending: boolean;
}