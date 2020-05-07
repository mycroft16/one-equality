import * as ErrorsStateImport from './errors/errors.state';
import * as PostsStateImport from './posts/posts.state';

export type ErrorsState = ErrorsStateImport.State;
export type PostsState = PostsStateImport.State;

export interface AppState {
    readonly errors: ErrorsState;
    readonly posts: PostsState;
}