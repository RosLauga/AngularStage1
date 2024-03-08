import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostListComponent } from './post-module/post-list/post-list.component';
import { PostFormComponent } from './post-module/post-form/post-form.component';
import { PostModule } from './post-module/post-module.module';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'post',
    pathMatch: 'full',
  },
  {
    path: 'post',
    loadChildren: () => PostModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesModule {}
