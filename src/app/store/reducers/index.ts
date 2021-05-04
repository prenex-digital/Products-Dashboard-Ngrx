import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { Posts } from 'src/app/dashboard/models/posts';
import { environment } from 'src/environments/environment';
import * as fromPosts from './post.reducer';

export interface AppState {
    [fromPosts.counterFeatureKey]: fromPosts.PostState;
}

export const reducers: ActionReducerMap<AppState> = {
    [fromPosts.counterFeatureKey]: fromPosts.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? []
    : [];
