import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './posts.state';
import { PostsEffects } from './posts.effects';
import { PostsService } from './posts.service';

@NgModule({
    imports: [
        StoreModule.forFeature('posts', reducer),
        EffectsModule.forFeature([PostsEffects]),
    ],
    providers: [PostsService],
})
export class PostsStoreModule { }