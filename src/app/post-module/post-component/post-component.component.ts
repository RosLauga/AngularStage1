import { Component, Input } from '@angular/core';
import { PostData } from '../post-list/post-list.component';
import { deletePost } from '../../state/posts.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrl: './post-component.component.css',
})
export class PostComponent {
  @Input() post: PostData = {};

  // posts: PostComponent[]=[new PostComponent(),new PostComponent(),new PostComponent()]

  isShowMore: boolean;

  constructor(public store: Store, private router: Router) {
    this.isShowMore = false;
  }

  onDelete() {
    this.store.dispatch(deletePost({ name: this.post.name!! }));
  }

  onClickShow() {
    this.isShowMore = !this.isShowMore;
  }

  goToDetails() {
    this.router.navigate([`post/details`], {
      queryParams: { name: this.post.name },
    });
  }
}
