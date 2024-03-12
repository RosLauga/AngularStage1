import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { PostModule } from './post-module/post-module.module';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { postsReducer } from './state/post.reducers';
import { PostsEffects } from './state/post.effects';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: 'post',
        loadChildren: () => PostModule,
      },
      {
        path: '**',
        redirectTo: 'post',
        pathMatch: 'full',
      },
    ]),
    provideAnimations(),
    provideStore(),
    provideEffects(),
  ],
};
