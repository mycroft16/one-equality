import { createAction, props, union } from '@ngrx/store';
import { IPartialUser, IUser, IUserObj } from '../../interfaces/user.interface';


export const createPartialUser = createAction(
    '[User] Create Partial User',
    props<{ partialUserObj: IPartialUser }>()
);


export const createPartialUserSuccess = createAction(
    '[User] Create Partial User Success',
    props<{ user: IUser }>()
);


export const createUser = createAction(
    '[User] Create User',
    props<{ userObj: IUserObj }>()
);


export const createUserSuccess = createAction(
    '[User] Create User Success',
    props<{ user: IUser }>()
);


export const fetchUser = createAction(
    '[User] Fetch User',
    props<{ username: string, password: string }>()
);


export const fetchUserSuccess = createAction(
    '[User] Fetch User Success',
    props<{ user: IUser }>()
);


export const updateUser = createAction(
    '[User] Update User',
    props<{ userObj: IUserObj }>()
);


export const updateUserSuccess = createAction(
    '[User] Update User Success',
    props<{ user: IUser }>()
);


const actions = union({
    createUser,
    createUserSuccess,
    createPartialUser,
    createPartialUserSuccess,
    fetchUser,
    fetchUserSuccess,
    updateUser,
    updateUserSuccess,
});


export type ActionsUnion = typeof actions;
