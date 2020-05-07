import { createAction, props, union } from '@ngrx/store';
import { INewPost, IPostFull, IPostListItem } from '../../interfaces/posts.interface';

export const createPost = createAction(
    '[Posts] Create Post',
    props<{ postObj: INewPost }>()
);

export const createPostSuccess = createAction(
    '[Posts] Create Post Success',
    props<{ isSuccessful: boolean }>()
);

export const fetchPost = createAction(
    '[Posts] Fetch Post',
    props<{ id: number }>()
);

export const fetchPostSuccess = createAction(
    '[Posts] Fetch Post Success',
    props<{ post: IPostFull }>()
);

export const fetchPostList = createAction('[Posts] Fetch Post List');

export const fetchPostListSuccess = createAction(
    '[Posts] Fetch Post List Success',
    props<{ postList: IPostListItem[] }>()
);

export const fetchPostListByTag = createAction(
    '[Posts] Fetch Post List By Tag',
    props<{ tag: string }>()
);

export const fetchPostListByTagSuccess = createAction(
    '[Posts] Fetch Post List By Tag Success',
    props<{ postList: IPostListItem[] }>()
);

export const fetchSpotlightList = createAction('[Posts] Fetch Spotlight List');

export const fetchSpotlightListSuccess = createAction(
    '[Posts] Fetch Spotlight List Success',
    props<{ spotlightList: IPostListItem[] }>()
);

export const fetchTrendingList = createAction('[Posts] Fetch Trending List');

export const fetchTrendingListSuccess = createAction(
    '[Posts] Fetch Trending List Success',
    props<{ trendingList: IPostListItem[] }>()
);

const actions = union({
    createPost,
    createPostSuccess,
    fetchPost,
    fetchPostSuccess,
    fetchPostList,
    fetchPostListSuccess,
    fetchPostListByTag,
    fetchPostListByTagSuccess,
    fetchSpotlightList,
    fetchSpotlightListSuccess,
    fetchTrendingList,
    fetchTrendingListSuccess,
});

export type ActionsUnion = typeof actions;
