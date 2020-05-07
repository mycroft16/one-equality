import { IUser } from './user.interface';

export interface IPetitionCategory {
    id: number;
    name: string;
}

export interface IPetition {
    id: number;
    category: number;
    createdOn: string;
    endsOn: string;
    description: string;
    isPublished: boolean;
    purposeStatement: string;
    title: string;
    user: IUser;
}

export interface IPetitionFilter {
    category: number;
    q: string;
}

export interface IPetitionObj {
    category: number;
    description: string;
    endsOn: string;
    purposeStatement: string;
    title: string;
    userId: number;
}

export interface IPetitionShort {
    id: number;
    category: number;
    createdOn: string;
    endsOn: string;
    isPublished: boolean;
    purposeStatement: string;
    title: string;
    user: IUser;
}
