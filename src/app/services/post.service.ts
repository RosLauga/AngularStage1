import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostData } from '../post-module/post-list/post-list.component';
import { PostComponent } from '../post-module/post-component/post-component.component';
import { DetailsBody } from '../post-module/post-details/post-details.component.store';

export const API_URL = new InjectionToken<string>('API_URL');

interface GetInfoAPI {
  results: PostData[];
}

@Injectable()
export class PostService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) public serviceUrl: string
  ) {}

  public getAllPosts() {
    return this.http.get(this.serviceUrl) as Observable<GetInfoAPI>;
  }

  public getDetails(name: string) {
    return this.http.get(this.serviceUrl + name) as Observable<DetailsBody>;
  }
}
