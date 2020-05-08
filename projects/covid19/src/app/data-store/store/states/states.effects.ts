import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { StatesService } from './states.service';
import * as StatesActions from './states.actions';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
// import * as ErrorActions from '../error/error.actions';

@Injectable()
export class StatesEffects {

    @Effect()
    public fetchStatesCurrent: Observable<Action> = this.actions.pipe(
        ofType(StatesActions.fetchStatesCurrent.type),
        switchMap(() =>
            this.service.fetchStatesCurrent().pipe(
                map(states => StatesActions.fetchStatesCurrentSuccess({ states })),
                // catchError(error => of(ErrorActions.handle({ error })))
            )
        )
    );


    @Effect()
    public fetchStateHistoric: Observable<Action> = this.actions.pipe(
        ofType(StatesActions.fetchStateHistoric.type),
        switchMap(action =>
            this.service.fetchStateHistoric(action.state, action.date).pipe(
                map(state => StatesActions.fetchStateHistoricSuccess({ state })),
                // catchError(error => of(ErrorActions.handle({ error })))
            )
        )
    );


    @Effect()
    public fetchStateInfo: Observable<Action> = this.actions.pipe(
        ofType(StatesActions.fetchStateInfo.type),
        switchMap(action =>
            this.service.fetchStateInfo(action.state).pipe(
                map(info => StatesActions.fetchStateInfoSuccess({ info })),
                // catchError(error => of(ErrorActions.handle({ error })))
            )
        )
    );


    constructor(
        private actions: Actions<StatesActions.ActionsUnion>,
        private service: StatesService,
    ) { }

}
