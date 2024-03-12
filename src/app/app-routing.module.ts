import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostModule } from './post-module/post-module.module';

const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  {
    path: 'post',
    loadChildren: () => PostModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
