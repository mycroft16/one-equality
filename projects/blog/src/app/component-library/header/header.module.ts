import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatToolbarModule,
    ]
})

export class HeaderModule { }
