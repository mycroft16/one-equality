import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { MaterialModule } from '../material/material.module';
import { PetitionsRoutingModule } from './petitions.routing.module';
import { PetitionsComponent } from './petitions.component';
import { ViewPetitionComponent } from './view-petition/view-petition.component';

@NgModule({
    declarations: [
        PetitionsComponent,
        ViewPetitionComponent,
    ],
    exports: [
        PetitionsComponent,
        ViewPetitionComponent,
    ],
    imports: [
        CommonModule,
        // MaterialModule,
        // FlexLayoutModule,
        PetitionsRoutingModule,
    ]
})

export class PetitionsModule { }
