import { Action, createReducer, on } from '@ngrx/store';
import { Posts, postsInit } from 'src/app/dashboard/models/posts';
import { storePosts } from '../actions/posts.actions';

export const counterFeatureKey = 'post';

export interface PostState {
    posts: Posts[];
}

export const initialState: PostState = {
    posts: []
};

const postReducer = createReducer(
    initialState,
    on(storePosts, (state, action) =>({
        ...state,
        posts: [action.posts, ...state.posts] 
    }))
);

export function reducer(state: PostState | undefined, action: Action) {
    return postReducer(state, action);
}
