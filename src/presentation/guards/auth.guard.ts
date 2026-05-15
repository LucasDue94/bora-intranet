import { CanActivateChildFn, CanActivateFn, CanMatchFn } from '@angular/router';

import { canAccessAuthenticatedRoute } from './auth-guard.utils';

export const authGuard: CanActivateFn = () => canAccessAuthenticatedRoute();

export const authChildGuard: CanActivateChildFn = () => canAccessAuthenticatedRoute();

export const authMatchGuard: CanMatchFn = () => canAccessAuthenticatedRoute();
