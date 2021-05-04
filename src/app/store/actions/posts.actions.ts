import { createAction, props } from '@ngrx/store';
import { Posts } from 'src/app/dashboard/models/posts';

// export const deletePost = createAction('[Posts] Delete Posts');

export const storePosts = createAction(
  '[Posts] Store Posts',
  props<{ posts: Posts }>()
);
