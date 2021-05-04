import { Action, createReducer, on } from '@ngrx/store';
import { Photos } from 'src/app/dashboard/models/photos';
import { storePhoto } from '../actions/photo.actions';

export const counterFeatureKey = 'photo';

export interface PhotoState {
    photos: Photos[];
}

export const initialPhotoState: PhotoState = {
    photos: []
};

const postReducer = createReducer(
    initialPhotoState,
    on(storePhoto, (state, action) => ({
        ...state,
        photos: [action.photos, ...state.photos]
    }))
);

export function reducer(state: PhotoState | undefined, action: Action) {
    return postReducer(state, action);
}
