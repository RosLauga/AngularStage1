import { Action, createReducer, on } from '@ngrx/store';
import { PostData } from '../post-module/post-list/post-list.component';
import { loadPosts, loadPostsSuccessfully } from './posts.actions';

export interface PostDataState {
  posts: PostData[];
  loaded: boolean;
}

const initialState: PostDataState = {
  posts: [],
  loaded: false,
};

export const POSTS_STATE_KEY = 'posts';

export const postsReducer = createReducer(
  initialState,
  on(loadPostsSuccessfully, (state, { posts }) => ({
    ...state,
    posts: [...posts],
  }))
);

export function reducer(state: PostDataState, action: Action) {
  return postsReducer(state, action);
}
