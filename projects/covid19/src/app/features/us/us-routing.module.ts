import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsComponent } from './us.component';

const usRoutes: Routes = [
    { path: 'us', component: UsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(usRoutes)],
    exports: [RouterModule]
})
export class UsRoutingModule {}