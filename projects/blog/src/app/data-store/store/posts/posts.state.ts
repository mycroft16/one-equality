import * as PostsActions from './posts.actions';
import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { AppState } from '../app.store';
import { IPostFull, IPostListItem } from '../../interfaces/posts.interface';

export interface State {
    currentPost: IPostFull;
    postList: IPostListItem[];
    spotlightList: IPostListItem[];
    trendingList: IPostListItem[];
};

export const initialState = (): State => {
    return {
        currentPost: null,
        postList: [],
        spotlightList: [],
        trendingList: [],
    };
};

export function reducer(state: State = initialState(), action: PostsActions.ActionsUnion): State {
    switch (action.type) {
        case PostsActions.fetchPostSuccess.type: {
            return {
                ...state,
                currentPost: action.post,
            };
        }

        case PostsActions.fetchPostListSuccess.type: {
            return {
                ...state,
                postList: action.postList,
            };
        }

        case PostsActions.fetchPostListByTagSuccess.type: {
            return {
                ...state,
                postList: action.postList,
            };
        }

        case PostsActions.fetchSpotlightListSuccess.type: {
            return {
                ...state,
                spotlightList: action.spotlightList,
            };
        }

        case PostsActions.fetchTrendingListSuccess.type: {
            return {
                ...state,
                trendingList: action.trendingList,
            };
        }

        default: {
            return state;
        }
    }
}


export const selectPostsState = createFeatureSelector<AppState, State>('posts');

export const selectCurrentPost = createSelector(selectPostsState, (state: State) => state.currentPost);
export const selectCurrentPostSnapshot = pipe(
    select(selectCurrentPost),
    filter(currentPost => !!currentPost),
    take(1),
);

export const selectPostList = createSelector(selectPostsState, (state: State) => state.postList);
export const selectPostListSnapshot = pipe(
    select(selectPostList),
    filter(postList => !!postList),
    take(1),
);