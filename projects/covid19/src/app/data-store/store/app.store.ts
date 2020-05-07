import * as StatesStateImport from './states/states.state';

export type StatesState = StatesStateImport.State;

export interface AppState {
    readonly states: StatesState;
}