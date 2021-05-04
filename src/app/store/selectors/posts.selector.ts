import { AppState } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectPostsState = (state: AppState) => state.post;
export const getPosts = createSelector(
    selectPostsState,
    post => post?.posts
);
