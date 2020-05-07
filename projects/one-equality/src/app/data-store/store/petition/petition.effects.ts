import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, mergeMap, map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as ErrorsActions from '../errors/errors.actions';

import { PetitionService } from './petition.service';
import * as PetitionActions from './petition.actions';

@Injectable()
export class PetitionEffects {
    constructor(
        private actions: Actions<PetitionActions.ActionsUnion>,
        private service: PetitionService,
    ) { }


    @Effect()
    public createPetition: Observable<Action> = this.actions.pipe(
        ofType(PetitionActions.createPetition),
        exhaustMap((action) =>
            this.service.createPetition(action.petitionObj).pipe(
                mergeMap((petitionId) => [
                    PetitionActions.createPetitionSuccess(),
                    PetitionActions.fetchPetition({ petitionId }),
                ]),
                catchError(error => of(ErrorsActions.setError({ error })))
            )
        )
    );


    @Effect()
    public deletePetition: Observable<Action> = this.actions.pipe(
        ofType(PetitionActions.deletePetition),
        exhaustMap((action) =>
            this.service.deletePetition(action.petitionId).pipe(
                map((petitionId) => PetitionActions.deletePetitionSuccess({ petitionId })),
                catchError(error => of(ErrorsActions.setError({ error })))
            )
        )
    );


    @Effect()
    public fetchPetition: Observable<Action> = this.actions.pipe(
        ofType(PetitionActions.fetchPetition),
        switchMap((action) =>
            this.service.fetchPetition(action.petitionId).pipe(
                map((petition) => PetitionActions.fetchPetitionSuccess({ petition })),
                catchError(error => of(ErrorsActions.setError({ error })))
            )
        )
    );


    @Effect()
    public fetchPetitions: Observable<Action> = this.actions.pipe(
        ofType(PetitionActions.fetchPetitions),
        switchMap((action) =>
            this.service.fetchPetitions(action.petitionFilter).pipe(
                map((petitions) => PetitionActions.fetchPetitionsSuccess({ petitions })),
                catchError(error => of(ErrorsActions.setError({ error })))
            )
        )
    );


    @Effect()
    public togglePetition: Observable<Action> = this.actions.pipe(
        ofType(PetitionActions.togglePetition),
        exhaustMap((action) =>
            this.service.togglePetition(action.petitionId).pipe(
                map(({petitionId, isPublished}) => PetitionActions.togglePetitionSuccess({ petitionId, isPublished })),
                catchError(error => of(ErrorsActions.setError({ error })))
            )
        )
    );


    @Effect()
    public updatePetition: Observable<Action> = this.actions.pipe(
        ofType(PetitionActions.updatePetition),
        exhaustMap((action) =>
            this.service.updatePetition(action.petitionObj).pipe(
                map((petition) => PetitionActions.updatePetitionSuccess({ petition })),
                catchError(error => of(ErrorsActions.setError({ error })))
            )
        )
    );
}
