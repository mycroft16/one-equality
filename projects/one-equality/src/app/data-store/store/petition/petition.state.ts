import * as PetitionActions from './petition.actions';
import { IPetition, IPetitionShort } from '../../interfaces/petition.interface';

export interface State {
    petitionList: IPetitionShort[];
    selectedPetition: IPetition;
}

export const initialState: State = {
    petitionList: [],
    selectedPetition: null,
};

export function reducer(state: State = initialState, action: PetitionActions.ActionsUnion): State {
    switch (action.type) {

        case PetitionActions.deletePetitionSuccess.type: {
            return {
                ...state,
                petitionList: state.petitionList.filter(petition => petition.id !== action.petitionId),
            };
        }

        case PetitionActions.fetchPetitionSuccess.type: {
            return {
                ...state,
                selectedPetition: action.petition,
            };
        }

        case PetitionActions.fetchPetitionsSuccess.type: {
            return {
                ...state,
                petitionList: action.petitions,
            };
        }

        default: {
            return state;
        }

    }
}
