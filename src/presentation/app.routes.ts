import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [],
    loadComponent: () =>
      import('./layouts/authenticated/authenticated-layout').then(
        (component) => component.AuthenticatedLayout,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.page').then((component) => component.HomePage),
      },
    ],
  },
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./pages/login/login.page').then((component) => component.LoginPage),
  },
];
