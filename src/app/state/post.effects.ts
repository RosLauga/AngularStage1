import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, mergeMap, switchMap } from 'rxjs/operators';
import { loadPosts, loadPostsSuccessfully } from './posts.actions';
import { PostService } from '../services/post.service';
import { PostData } from '../post-module/post-list/post-list.component';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      switchMap(() =>
        this.postsService.getAllPosts().pipe(
          map((result) => {
            const posts = [...result.results];
            return loadPostsSuccessfully({ posts });
          })
        )
      )
      // catchError(error => loadPostsFailure({ error }))
    )
  );
  constructor(private actions$: Actions, public postsService: PostService) {}
}
