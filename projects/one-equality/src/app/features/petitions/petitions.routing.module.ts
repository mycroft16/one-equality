import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetitionsComponent } from './petitions.component';
// import { AddArtistComponent } from './add-artist/add-artist.component';
// import { EditArtistComponent } from './edit-artist/edit-artist.component';
import { ViewPetitionComponent } from './view-petition/view-petition.component';

const petitionsRoutes: Routes = [
    { path: 'petitions', component: PetitionsComponent },
    { path: 'petition/:petitionId', component: ViewPetitionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(petitionsRoutes)],
    exports: [RouterModule]
})

export class PetitionsRoutingModule { }
