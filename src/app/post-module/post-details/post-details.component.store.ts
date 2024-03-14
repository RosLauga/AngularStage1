import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ofType } from '@ngrx/effects';
import { createAction, props } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Actions } from '@ngrx/effects';

export interface DetailsBody {
  abilities: {
    ability: {
      name: string;
    };
  };
  order: number;
  sprites: {
    front_default: string;
  };
  weight: number;
}

interface CardDetails {
  details?: DetailsBody;
}

export const loadDetails = createAction(
  '[Post list] get pokemon details',
  props<DetailsBody>()
);

@Injectable({ providedIn: 'root' })
export class PostDetailsComponentStore extends ComponentStore<DetailsBody> {
  public details$ = this.select((state) => state);

  public setDetails = this.updater((state, body: CardDetails) => {
    return {
      ...state,
      details: body,
    };
  });

  public getDetailsFromPokemon = this.effect(() =>
    this.actions$.pipe(
      ofType(loadDetails),
      switchMap(() => this.postService.getDetails('ditto'))
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {
    super();
  }
}
