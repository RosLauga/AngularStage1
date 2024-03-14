import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  PostDetailsComponentStore,
  loadDetails,
} from './post-details.component.store';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
  providers: [PostDetailsComponentStore],
})
export class PostDetailsComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private componentStore: PostDetailsComponentStore
  ) {}
  public detail$ = this.componentStore.details$;

  public pokeName: string = '';

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(
        filter((x) => !!x),
        take(1)
      )
      .subscribe((params) => {
        this.pokeName = params['name'];
        this.store.dispatch(loadDetails({ name: this.pokeName }));
      });
  }
}
