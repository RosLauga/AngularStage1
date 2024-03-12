import { Action, createReducer, on } from '@ngrx/store';
import { PostData } from '../post-module/post-list/post-list.component';
import { deletePost, loadPostsSuccessfully } from './posts.actions';

export interface PostDataState {
  posts: PostData[];
}

const initialState: PostDataState = {
  posts: [],
};

export const POSTS_STATE_KEY = 'posts';

export const postsReducer: any = createReducer(
  initialState,
  on(loadPostsSuccessfully, (state, { posts }) => ({
    ...state,
    posts: posts,
  })),
  on(deletePost, (state, { name }) => ({
    ...state,
    posts: state.posts.filter((poke: PostData) => poke.name !== name),
  }))
);

export function reducer(state: PostDataState, action: Action) {
  return postsReducer(state, action);
}
