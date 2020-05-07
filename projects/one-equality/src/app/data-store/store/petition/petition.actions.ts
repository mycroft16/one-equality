import { createAction, props, union } from '@ngrx/store';
import { IPetition, IPetitionFilter, IPetitionObj, IPetitionShort } from '../../interfaces/petition.interface';


export const createPetition = createAction(
    '[Petition] Create Petition',
    props<{ petitionObj: IPetitionObj }>()
);


export const createPetitionSuccess = createAction('[Petition] Create Petition Success');


export const deletePetition = createAction(
    '[Petition] Delete Petition',
    props<{ petitionId: number }>()
);


export const deletePetitionSuccess = createAction(
    '[Petition] Delete Petition Success',
    props<{ petitionId: number }>()
);


export const fetchPetition = createAction(
    '[Petition] Fetch Petition',
    props<{ petitionId: number }>()
);


export const fetchPetitionSuccess = createAction(
    '[Petition] Fetch Petition Success',
    props<{ petition: IPetition }>()
);


export const fetchPetitions = createAction(
    '[Petition] Fetch Petitions',
    props<{ petitionFilter: IPetitionFilter }>()
);


export const fetchPetitionsSuccess = createAction(
    '[Petition] Fetch Petitions Success',
    props<{ petitions: IPetitionShort[] }>()
);


export const togglePetition = createAction(
    '[Petition] Toggle Petition',
    props<{ petitionId: number }>()
);


export const togglePetitionSuccess = createAction(
    '[Petition] Toggle Petition Success',
    props<{ petitionId: number, isPublished: boolean }>()
);


export const updatePetition = createAction(
    '[Petition] Update Petition',
    props<{ petitionObj: IPetition }>()
);


export const updatePetitionSuccess = createAction(
    '[Petition] Update Petition Success',
    props<{ petition: IPetition }>()
);


const actions = union({
    createPetition,
    createPetitionSuccess,
    deletePetition,
    deletePetitionSuccess,
    fetchPetition,
    fetchPetitionSuccess,
    fetchPetitions,
    fetchPetitionsSuccess,
    togglePetition,
    togglePetitionSuccess,
    updatePetition,
    updatePetitionSuccess,
});


export type ActionsUnion = typeof actions;
