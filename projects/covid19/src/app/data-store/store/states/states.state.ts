import * as StateActions from './states.actions';
import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { AppState } from '../app.store';
import { IStateCurrent, IStateHistoric, IStateInfo } from '../../interfaces/states.interface';

export interface State {
    current: IStateCurrent[];
    historic: IStateHistoric[];
    stateInfo: IStateInfo;
};

export const initialState = (): State => {
    return {
        current: null,
        historic: null,
        stateInfo: null,
    };
};

export function reducer(state: State = initialState(), action: StateActions.ActionsUnion): State {
    switch (action.type) {

        case StateActions.fetchStateHistoric.type:
        case StateActions.fetchStateInfo.type: {
            return {
                ...state,
                historic: null,
                stateInfo: null,
            };
        }

        case StateActions.fetchStatesCurrentSuccess.type: {
            return {
                ...state,
                current: action.states,
            };
        }

        case StateActions.fetchStateHistoricSuccess.type: {
            return {
                ...state,
                historic: action.state,
            };
        }

        case StateActions.fetchStateInfoSuccess.type: {
            return {
                ...state,
                stateInfo: action.info,
            };
        }

        default: {
            return state;
        }
    }
}

export const selectStatesState = createFeatureSelector<AppState, State>('states');

export const selectCurrent = createSelector(selectStatesState, (state: State) => state.current);
export const selectCurrentSnapshot = pipe(
    select(selectCurrent),
    filter(current => !!current),
    take(1)
);

export const selectHistoric = createSelector(selectStatesState, (state: State) => state.historic);
export const selectHistoricSnapshot = pipe(
    select(selectHistoric),
    filter(historic => !!historic),
    take(1)
);

export const selectStateInfo = createSelector(selectStatesState, (state: State) => state.stateInfo);
export const selectStateInfoSnapshot = pipe(
    select(selectStateInfo),
    filter(info => !!info),
    take(1)
);