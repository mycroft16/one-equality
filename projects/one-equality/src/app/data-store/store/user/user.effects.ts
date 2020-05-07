import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as ErrorsActions from '../errors/errors.actions';

import { UserService } from './user.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
    constructor(
        private actions: Actions<UserActions.ActionsUnion>,
        private service: UserService,
    ) { }


    @Effect()
    public createPartialUser: Observable<Action> = this.actions.pipe(
        ofType(UserActions.createPartialUser),
        exhaustMap((action) =>
            this.service.createPartialUser(action.partialUserObj).pipe(
                map((user) => UserActions.createPartialUserSuccess({ user })),
                catchError(error => of(ErrorsActions.setError({ error })))
            )
        )
    );


    @Effect()
    public createUser: Observable<Action> = this.actions.pipe(
        ofType(UserActions.createUser),
        exhaustMap((action) =>
            this.service.createUser(action.userObj).pipe(
                map((user) => UserActions.createUserSuccess({ user })),
                catchError(error => of(ErrorsActions.setError({ error })))
            )
        )
    );


    @Effect()
    public fetchUser: Observable<Action> = this.actions.pipe(
        ofType(UserActions.fetchUser),
        switchMap((action) =>
            this.service.fetchUser(action.username, action.password).pipe(
                map((user) => UserActions.fetchUserSuccess({ user })),
                catchError(error => of(ErrorsActions.setError({ error })))
            )
        )
    );


    @Effect()
    public updateUser: Observable<Action> = this.actions.pipe(
        ofType(UserActions.updateUserSuccess),
        exhaustMap((action) =>
            this.service.updateUser(action.user).pipe(
                map((user) => UserActions.updateUserSuccess({ user })),
                catchError(error => of(ErrorsActions.setError({ error })))
            )
        )
    );
}
