import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostData } from '../post-module/post-list/post-list.component';
import { PostComponent } from '../post-module/post-component/post-component.component';

export const API_URL = new InjectionToken<string>('API_URL');

@Injectable()
export class PostService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) public serviceUrl: string
  ) {}

  public getAllPosts() {
    return this.http.get(this.serviceUrl) as Observable<PostData[]>;
  }

  // public addPost(data: PostData) {
  //   this.postList.push(data);
  // }
}
