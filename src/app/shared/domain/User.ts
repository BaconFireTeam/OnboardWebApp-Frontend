export class User {
    id: number;
    username: string;
    email:string;
    password: string;
    personalID: string;
    createDate: string;
    modificationDate: string;
}

export class Role {
    id: number;
    roleName: string;
    description: string;
    createDate: string;
    modificationDate: string;
    lastModificationUser: string;
}

export class Person {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    cellPhone: string;
    alternatePhone: string;
    gender: string;
    ssn: string;
    dob: string;
}