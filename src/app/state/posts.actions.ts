import { createAction, props } from '@ngrx/store';
import { PostData } from '../post-module/post-list/post-list.component';

export const loadPosts = createAction('[Post list] load posts success');

export const loadPostsSuccessfully = createAction(
  '[Post Set-list] Set Post success',
  props<{ posts: PostData[] }>()
);

export const deletePost = createAction(
  '[Post list] delete post successfully',
  props<{ name: string }>()
);

export const addPost = createAction(
  '[Post list] add post successfully',
  props<{ post: PostData }>()
);
