import { Component, Input } from '@angular/core';
import { PostComponent } from '../post-component/post-component.component';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';

export interface PostData {
  user?: string;
  date?: Date;
  content?: string;
}
@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  public data$: PostData[];

  constructor(private postsList: PostService) {
    this.data$ = this.postsList.getAllPost();
  }
}
