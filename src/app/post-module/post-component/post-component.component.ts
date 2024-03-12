import { Component, Input } from '@angular/core';
import { PostData } from '../post-list/post-list.component';
import { deletePost } from '../../state/posts.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrl: './post-component.component.css',
})
export class PostComponent {
  @Input() post: PostData = {};

  // posts: PostComponent[]=[new PostComponent(),new PostComponent(),new PostComponent()]

  isShowMore: boolean;

  constructor(public store: Store) {
    this.isShowMore = false;
  }

  onDelete(name: string) {
    this.store.dispatch(deletePost({ name }));
  }

  onClickShow() {
    this.isShowMore = !this.isShowMore;
  }
}
