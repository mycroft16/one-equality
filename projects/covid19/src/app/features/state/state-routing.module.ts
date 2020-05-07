import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state.component';

const stateRoutes: Routes = [
    { path: 'state/:id', component: StateComponent },
];

@NgModule({
    imports: [RouterModule.forChild(stateRoutes)],
    exports: [RouterModule]
})
export class StateRoutingModule {}