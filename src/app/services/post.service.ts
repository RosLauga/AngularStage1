import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostData } from '../post-module/post-list/post-list.component';
import { API_URL } from '../post-module/post-module.module';

@Injectable()
export class PostService {
  constructor(
    @Inject(API_URL) public serviceUrl: string,
    private http: HttpClient
  ) {}
  public getAllPost() {
    return this.http.get(this.serviceUrl) as Observable<PostData>;
  }
}
