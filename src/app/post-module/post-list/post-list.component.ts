import { Component, Input } from '@angular/core';
import { PostComponent } from '../post-component/post-component.component';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';

interface Abilities {
  ability: {
    name: string;
  };
}

export interface PostData {
  id?: number;
  name?: string;
  abilities?: Abilities[];
}
@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  public data$: Observable<PostData>;

  constructor(private postsList: PostService) {
    this.data$ = this.postsList.getAllPost();
  }
}
