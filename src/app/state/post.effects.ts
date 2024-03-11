import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, mergeMap, switchMap } from 'rxjs/operators';
import { loadPosts, loadPostsSuccessfully } from './posts.actions';
import { PostService } from '../services/post.service';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      switchMap(() =>
        this.postsService.getAllPosts().pipe(
          map((posts) => {
            return loadPostsSuccessfully({ posts });
          })
        )
      )
      // catchError(error => loadPostsFailure({ error }))
    )
  );

  constructor(private actions$: Actions, private postsService: PostService) {}
}
