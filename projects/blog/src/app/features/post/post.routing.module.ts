import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';

const postRoutes: Routes = [
    { path: 'post/:id', component: PostComponent },
];

@NgModule({
    imports: [RouterModule.forChild(postRoutes)],
    exports: [RouterModule],
})
export class PostRoutingModule { }
