import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { PostData } from '../post-list/post-list.component';
import { Store } from '@ngrx/store';
import { addPost } from '../../state/posts.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent implements OnInit {
  constructor(public store: Store, private router: Router) {}

  public addPostForm = new FormGroup({
    userpost: new FormControl('', [Validators.required]),
    datepost: new FormControl('', [Validators.required]),
  });

  private checkErrors() {
    const errors: string[] = [];
    if (this.addPostForm.getError('required', ['userpost'])) {
      errors.push('Nombre requerido');
    }
    if (this.addPostForm.getError('required', ['datepost'])) {
      errors.push('URL requerido');
    }
    return errors;
  }
  public errorsArray: string[] = [];

  public errorCheck$ = this.addPostForm.statusChanges.pipe(
    map((x) => {
      return (this.errorsArray = this.checkErrors());
    })
  );

  public handleSubmit() {
    const postdata: PostData = {
      name: '',
      url: '',
    };
    postdata.name = this.addPostForm.get('userpost')!.value || '';
    postdata.url = this.addPostForm.get('datepost')!.value || '';
    this.store.dispatch(addPost({ post: postdata }));
    this.router.navigate(['post/list']);
  }

  ngOnInit(): void {}
}
