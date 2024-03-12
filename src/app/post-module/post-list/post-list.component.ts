import { Component, Input } from '@angular/core';
import { PostComponent } from '../post-component/post-component.component';
import { PostService } from '../../services/post.service';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadPosts } from '../../state/posts.actions';
import { getPosts } from '../../state/posts.selectors';

export interface PostData {
  name?: string;
  url?: string;
}
@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  public data$: Observable<PostData[]>;

  constructor(private store: Store) {
    this.store.dispatch(loadPosts());
    this.data$ = this.store.select(getPosts);
    console.log('Data', this.data$);
  }
}
