import { Component } from '@angular/core';
import { PostComponent } from '../post-component/post-component.component';
import { PostService } from '../../services/post.service';
import { Observable, map, of } from 'rxjs';
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
    this.data$ = this.store.select(getPosts);
  }

  ngOnInit() {
    this.data$.subscribe((post) => {
      if (post.length > 0) {
        return;
      } else {
        this.store.dispatch(loadPosts());
      }
    });
  }
}
