import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'posts',
    loadComponent: () =>
      import('./posts/posts.component').then((c) => c.PostsComponent),
  },

  {
    path: 'post/:slug',
    loadComponent: () =>
      import('./view-post/view-post.component').then(
        (c) => c.ViewPostComponent
      ),
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/posts',
  },

  {
    path: '**',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
];
