import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { AuthSession } from '../domain/auth-session';
import { AuthRepositoryPort } from '../ports/auth-repository.port';
import { SessionStoragePort } from '../ports/session-storage.port';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authRepository = inject(AuthRepositoryPort);
  private readonly sessionStorage = inject(SessionStoragePort);

  login(email: string, password: string): Observable<AuthSession> {
    return this.authRepository
      .login(email, password)
      .pipe(tap((session) => this.sessionStorage.save(session)));
  }

  isAuthenticated(): boolean {
    return this.sessionStorage.isAuthenticated();
  }

  logout(): void {
    this.sessionStorage.clear();
  }
}
