import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './component-library/header/header.module';
import { StateModule } from './features/state/state.module';
import { UsModule } from './features/us/us.module';

// Store Modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers } from './data-store/store/meta-reducers';
import { StatesStoreModule } from './data-store/store/states/states.module';
import { ApiServiceModule } from './data-store/store/api/api.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ApiServiceModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({} as any, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    StateModule,
    UsModule,
    AppRoutingModule,
    HeaderModule,
    StatesStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
