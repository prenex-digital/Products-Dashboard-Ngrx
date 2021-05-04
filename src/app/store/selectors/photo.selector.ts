import { AppState } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectPhotoState = (state: AppState) => state.photo;
export const getPhotos = createSelector(
    selectPhotoState,
    photo => photo.photos
);
