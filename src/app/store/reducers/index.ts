import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromPosts from './post.reducer';
import * as fromPhotos from './photo.reducer';

export interface AppState {
    [fromPosts.counterFeatureKey]: fromPosts.PostState,
    [fromPhotos.counterFeatureKey]: fromPhotos.PhotoState,
}

export const reducers: ActionReducerMap<AppState> = {
    [fromPosts.counterFeatureKey]: fromPosts.reducer,
    [fromPhotos.counterFeatureKey]: fromPhotos.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? []
    : [];
