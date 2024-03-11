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
    contentpost: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  private checkErrors() {
    const errors: string[] = [];
    if (this.addPostForm.getError('required', ['userpost'])) {
      errors.push('Usuario requerido');
    }
    if (this.addPostForm.getError('required', ['datepost'])) {
      errors.push('Fecha requerido');
    }
    if (this.addPostForm.getError('required', ['contentpost'])) {
      errors.push('Contenido requerido');
    }
    if (this.addPostForm.getError('minlength', ['contentpost'])) {
      errors.push('El contenido debe ser mayor a 10 caracteres');
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
      user: '',
      date: new Date(),
      content: '',
    };
    postdata.user = this.addPostForm.get('userpost')!.value || '';
    postdata.content = this.addPostForm.get('contentpost')!.value || '';
    postdata.date = new Date(this.addPostForm.get('datepost')!.value || '');
    console.log(postdata);
    // this.postsList.addPost(postdata);
  }

  ngOnInit(): void {}
}
