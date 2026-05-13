import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';

export const canAccessAuthenticatedRoute = (): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};

export const canAccessGuestRoute = (): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/']);
};
