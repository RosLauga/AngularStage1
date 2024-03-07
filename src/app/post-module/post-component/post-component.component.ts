import { Component, Input } from '@angular/core';
import { PostData } from '../post-list/post-list.component';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrl: './post-component.component.css',
})
export class PostComponent {
  @Input() post: PostData = {};

  // posts: PostComponent[]=[new PostComponent(),new PostComponent(),new PostComponent()]

  isShowMore: boolean;

  constructor() {
    this.isShowMore = false;
  }

  onClickShow() {
    this.isShowMore = !this.isShowMore;
  }
}
