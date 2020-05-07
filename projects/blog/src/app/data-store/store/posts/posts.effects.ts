import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as ErrorsActions from '../errors/errors.actions';

import { PostsService } from './posts.service';
import * as PostsActions from './posts.actions';

@Injectable()
export class PostsEffects {

    @Effect()
    public createPost: Observable<Action> = this.actions.pipe(
        ofType(PostsActions.createPost.type),
        switchMap((action) =>
            this.service.createPost(action.postObj).pipe(
                map((isSuccessful) => PostsActions.createPostSuccess({ isSuccessful })),
                catchError(error => of(ErrorsActions.setError({ error }))),
            )
        )
    );


    @Effect()
    public fetchPost: Observable<Action> = this.actions.pipe(
        ofType(PostsActions.fetchPost.type),
        switchMap((action) =>
            this.service.fetchPost(action.id).pipe(
                map((post) => PostsActions.fetchPostSuccess({ post })),
                catchError(error => of(ErrorsActions.setError({ error }))),
            )
        )
    );


    @Effect()
    public fetchPostList: Observable<Action> = this.actions.pipe(
        ofType(PostsActions.fetchPostList.type),
        switchMap(() =>
            this.service.fetchPostList().pipe(
                map((postList) => PostsActions.fetchPostListSuccess({ postList })),
                catchError(error => of(ErrorsActions.setError({ error }))),
            )
        )
    );


    @Effect()
    public fetchPostListByTag: Observable<Action> = this.actions.pipe(
        ofType(PostsActions.fetchPostListByTag.type),
        switchMap((action) =>
            this.service.fetchPostListByTag(action.tag).pipe(
                map((postList) => PostsActions.fetchPostListByTagSuccess({ postList })),
                catchError(error => of(ErrorsActions.setError({ error }))),
            )
        )
    );


    @Effect()
    public fetchSpotlightList: Observable<Action> = this.actions.pipe(
        ofType(PostsActions.fetchSpotlightList.type),
        switchMap(() =>
            this.service.fetchSpotlightList().pipe(
                map((spotlightList) => PostsActions.fetchSpotlightListSuccess({ spotlightList })),
                catchError(error => of(ErrorsActions.setError({ error }))),
            )
        )
    );

    
    @Effect()
    public fetchTrendingList: Observable<Action> = this.actions.pipe(
        ofType(PostsActions.fetchTrendingList.type),
        switchMap(() =>
            this.service.fetchTrendingList().pipe(
                map((trendingList) => PostsActions.fetchTrendingListSuccess({ trendingList })),
                catchError(error => of(ErrorsActions.setError({ error }))),
            )
        )
    );

    constructor(
        private actions: Actions<PostsActions.ActionsUnion>,
        private service: PostsService
    ) { }
}