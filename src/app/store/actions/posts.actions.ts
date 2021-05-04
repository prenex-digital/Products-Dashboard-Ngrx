import { createAction, props } from '@ngrx/store';
import { Posts } from 'src/app/dashboard/models/posts';

export const storePosts = createAction(
  '[Posts] Store Posts',
  props<{ posts: Posts }>()
);

