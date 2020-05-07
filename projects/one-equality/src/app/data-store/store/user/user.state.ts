import * as UserActions from './user.actions';
import { IUser } from '../../interfaces/user.interface';

const getData = (): IUser => {
    const userState = localStorage.getItem('userState');
    try {
        return JSON.parse(userState).data;
    } catch {
        return null;
    }
};

const setData = (state: State): void => {
    localStorage.setItem('userState', JSON.stringify(state));
};

export interface State {
    data: IUser;
}

export const initialState: State = {
    data: getData(),
};

export function reducer(state: State = initialState, action: UserActions.ActionsUnion): State {
    switch (action.type) {

        case UserActions.createPartialUserSuccess.type:
        case UserActions.createUserSuccess.type:
        case UserActions.fetchUserSuccess.type:
        case UserActions.updateUserSuccess.type: {
            const newState = {
                ...state,
                data: action.user,
            };
            setData( newState );

            return { ...newState };
        }


        default: {
            return state;
        }
    }
}

