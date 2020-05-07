import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { StatesStoreModule } from '../../data-store/store/states/states.module';
import { UsRoutingModule } from './us-routing.module';
import { UsComponent } from './us.component';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatToolbarModule,
        StoreModule,
        StatesStoreModule,
        UsRoutingModule,
    ],
    exports: [
        UsComponent,
    ],
    declarations: [
        UsComponent,
    ],
})
export class UsModule {}