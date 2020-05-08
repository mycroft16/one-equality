import { createAction, props, union } from '@ngrx/store';
import { IStateCurrent, IStateHistoric, IStateInfo } from '../../interfaces/states.interface';

export const fetchStatesCurrent = createAction('[States] Fetch States Current');

export const fetchStatesCurrentSuccess = createAction(
    '[States] Fetch States Current Success',
    props<{ states: IStateCurrent[] }>()
);

export const fetchStateHistoric = createAction(
    '[States] Fetch State Historical',
    props<{ state: string, date: number }>()
);

export const fetchStateHistoricSuccess = createAction(
    '[States] Fetch State Historical Success',
    props<{ state: IStateHistoric[] }>()
);

export const fetchStateInfo = createAction(
    '[States] Fetch State Info',
    props<{ state: string }>()
);

export const fetchStateInfoSuccess = createAction(
    '[States] Fetch State Info Success',
    props<{ info: IStateInfo }>()
);

const actions = union({
    fetchStatesCurrent,
    fetchStatesCurrentSuccess,
    fetchStateHistoric,
    fetchStateHistoricSuccess,
    fetchStateInfo,
    fetchStateInfoSuccess,
});

export type ActionsUnion = typeof actions;
