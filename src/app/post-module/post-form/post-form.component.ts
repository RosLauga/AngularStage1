import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { PostService } from '../../services/post.service';
import { PostData } from '../post-list/post-list.component';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent implements OnInit {
  constructor(private postsList: PostService) {}

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
    // this.postsList.addPost(postdata);
  }

  ngOnInit(): void {}
}
