import { /*ActionReducer, */MetaReducer } from '@ngrx/store';
import { AppState } from './app.store';
import { storeFreeze } from 'ngrx-store-freeze';
// import * as UserActions from './user/user.actions';

// export function clearStore(reducer: ActionReducer<any>): ActionReducer<any> {
//     return function(state: any, action: any): any {
//         switch (action.type) {
//             case UserActions.resetUser.type: {
//                 return reducer({ api: { environment: state.api.environment } }, action);
//             }
//         }
//         return reducer(state, action);
//     };
// }

export const metaReducers: MetaReducer<AppState>[] = [/*clearStore, */storeFreeze];
