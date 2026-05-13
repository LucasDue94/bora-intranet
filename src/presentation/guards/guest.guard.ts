import { CanActivateFn, CanMatchFn } from '@angular/router';

import { canAccessGuestRoute } from './auth-guard.utils';

export const guestGuard: CanActivateFn = () => canAccessGuestRoute();

export const guestMatchGuard: CanMatchFn = () => canAccessGuestRoute();
