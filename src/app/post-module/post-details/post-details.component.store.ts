import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ofType } from '@ngrx/effects';
import { createAction, props } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Actions } from '@ngrx/effects';

export interface DetailsBody {
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
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
  props<{ name: string }>()
);

const initialState: CardDetails = {};

@Injectable()
export class PostDetailsComponentStore extends ComponentStore<CardDetails> {
  public details$ = this.select((state) => state.details);

  public setDetails = this.updater((state, body: DetailsBody) => {
    console.log('Body', body);
    return {
      ...state,
      details: {
        abilities: body.abilities,
        order: body.order,
        sprites: body.sprites,
        weight: body.weight,
      },
    };
  });

  public getDetailsFromPokemon = this.effect(() =>
    this.actions$.pipe(
      ofType(loadDetails),
      switchMap((action) =>
        this.postService
          .getDetails(action.name)
          .pipe(map((detail) => this.setDetails(detail)))
      )
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {
    super(initialState);
  }
}
