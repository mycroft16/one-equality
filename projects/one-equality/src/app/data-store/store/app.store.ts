import * as ErrorsState from './errors/errors.state';
import * as PetitionState from './petition/petition.state';
import * as UserState from './user/user.state';

export type ErrorsState = ErrorsState.State;
export type PetitionState = PetitionState.State;
export type UserState = UserState.State;


export interface AppState {
    readonly errors: ErrorsState;
    readonly petition: PetitionState;
    readonly user: UserState;
}


export interface AppReducers {
    // tslint:disable-next-line: ban-types
    readonly[reducerName: string]: Function;
}


export const reducers: AppReducers = {
    errors: ErrorsState.reducer,
    petition: PetitionState.reducer,
    user: UserState.reducer,
};
