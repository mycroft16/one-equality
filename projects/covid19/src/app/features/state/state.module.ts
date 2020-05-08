import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { StatesStoreModule } from '../../data-store/store/states/states.module';
import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatTableModule,
        MatToolbarModule,
        StoreModule,
        StatesStoreModule,
        StateRoutingModule,
    ],
    exports: [
        StateComponent,
    ],
    declarations: [
        StateComponent,
    ],
})
export class StateModule {}
