import { Injectable, inject } from '@angular/core';

import { AuthSession } from '../../core/domain/auth-session';
import { SessionStoragePort } from '../../core/ports/session-storage.port';
import { TokenStorage } from './token.storage';
import { UserStorage } from './user.storage';

@Injectable()
export class LocalSessionStorage extends SessionStoragePort {
  private readonly tokenStorage = inject(TokenStorage);
  private readonly userStorage = inject(UserStorage);

  save(session: AuthSession): void {
    this.tokenStorage.set(session.token);
    this.userStorage.set(session.user);
  }

  isAuthenticated(): boolean {
    return Boolean(this.tokenStorage.snapshot?.accessToken);
  }

  clear(): void {
    this.tokenStorage.clear();
    this.userStorage.clear();
  }
}
