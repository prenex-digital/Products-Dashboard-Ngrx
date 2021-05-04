import { createAction, props } from '@ngrx/store';
import { Photos } from 'src/app/dashboard/models/photos';
export const storePhoto = createAction(
    '[Photos] Store Photos',
    props<{ photos: Photos }>()
);
