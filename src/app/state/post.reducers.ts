import { Action, createReducer, on } from '@ngrx/store';
import { PostData } from '../post-module/post-list/post-list.component';
import { loadPosts, loadPostsSuccessfully } from './posts.actions';

interface State {
  posts: PostData[];
  loaded: boolean;
}

const initialState: State = {
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

export function reducer(state: State, action: Action) {
  return postsReducer(state, action);
}
