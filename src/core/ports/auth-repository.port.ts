import { Observable } from 'rxjs';

import { AuthSession } from '../domain/auth-session';

export abstract class AuthRepositoryPort {
  abstract login(emailOrUsername: string, password: string): Observable<AuthSession>;
}
