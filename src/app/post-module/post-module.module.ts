import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post-component/post-component.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../services/post.service';

export const API_URL = new InjectionToken<string>('API_URL');

@NgModule({
  declarations: [PostComponent, PostListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PostComponent, PostListComponent],
  providers: [
    PostService,
    { provide: API_URL, useValue: 'https://pokeapi.co/api/v2/pokemon/ditto' },
  ],
})
export class PostModule {}
