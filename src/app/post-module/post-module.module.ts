import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post-component/post-component.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { API_URL, PostService } from '../services/post.service';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StoreModule } from '@ngrx/store';
import { POSTS_STATE_KEY, postsReducer } from '../state/post.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from '../state/post.effects';
export const postRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: PostFormComponent,
  },
  {
    path: 'list',
    component: PostListComponent,
  },
];

@NgModule({
  declarations: [PostComponent, PostListComponent, PostFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(postRoutes),
    MatButtonModule,
    MatSlideToggleModule,
    StoreModule.forFeature(POSTS_STATE_KEY, postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  exports: [PostComponent, PostListComponent, PostFormComponent],
  providers: [
    PostService,
    { provide: API_URL, useValue: 'https://pokeapi.co/api/v2/pokemon/ditto' },
  ],
})
export class PostModule {}
