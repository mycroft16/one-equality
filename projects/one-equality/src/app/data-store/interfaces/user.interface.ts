export interface IUser {
    id: number;
    city: string;
    createdOn: string;
    email: string;
    firstName: string;
    lastName: string;
    state: string;
    userStatus: number;
    displayName?: string;
}

export interface IPartialUser {
    city: string;
    email: string;
    firstName: string;
    lastName: string;
    state: string;
}

export interface IUserObj {
    city: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    state: string;
}
