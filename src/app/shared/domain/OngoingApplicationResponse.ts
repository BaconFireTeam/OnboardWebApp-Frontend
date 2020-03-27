import { ServiceStatus } from './Response.model';

export class OngoingApplicationResponse {
    serviceStatus: ServiceStatus;
    applicationList: Array<Application>;
}

export class Application {
    employeeID: number;
    employeeName: string;
    type: string;
    status: string;
}