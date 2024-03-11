import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POSTS_STATE_KEY, PostDataState } from './post.reducers';

export const getPostsState =
  createFeatureSelector<PostDataState>(POSTS_STATE_KEY);

export const getPosts = createSelector(getPostsState, (state) => state.posts);
