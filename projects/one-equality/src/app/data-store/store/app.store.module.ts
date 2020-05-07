import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule as RxjsStore } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects';
import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { AppState } from './app.store';

import { ApiService } from './api/api.service';
import { ApiPublicService } from './api/api-public.service';

import * as ErrorsState from './errors/errors.state';

import { PetitionEffects } from './petition/petition.effects';
import { PetitionService } from './petition/petition.service';
import * as PetitionState from './petition/petition.state';

import { UserEffects } from './user/user.effects';
import { UserService } from './user/user.service';
import * as UserState from './user/user.state';

export const metaReducers: MetaReducer<AppState>[] = [
    storeFreeze
];


export const PROVIDERS: any[] = [
    ApiService,
    ApiPublicService,
    PetitionService,
    UserService,
];


export const EFFECTS: ModuleWithProviders = EffectsModule.forRoot([
    PetitionEffects,
    UserEffects,
]);


export const STORES: any = {
    errors: ErrorsState.reducer,
    petition: PetitionState.reducer,
    user: UserState.reducer,
};


@NgModule({
    imports: [
        HttpClientModule,
        RxjsStore.forRoot(STORES, { metaReducers }),
        StoreDevtoolsModule.instrument(),
        EFFECTS,
    ],
    providers: [
        ...PROVIDERS
    ]
})
export class StoreModule {}
