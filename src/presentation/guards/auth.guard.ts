import { CanActivateFn, CanMatchFn } from '@angular/router';

import { canAccessAuthenticatedRoute } from './auth-guard.utils';

export const authGuard: CanActivateFn = () => canAccessAuthenticatedRoute();

export const authMatchGuard: CanMatchFn = () => canAccessAuthenticatedRoute();
