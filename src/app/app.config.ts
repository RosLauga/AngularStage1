import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { PostModule } from './post-module/post-module.module';

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
  ],
};
