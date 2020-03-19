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