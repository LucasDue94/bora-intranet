import { Observable } from 'rxjs';

import { AuthSession } from '../domain/auth-session';

export abstract class AuthRepositoryPort {
  abstract login(email: string, password: string): Observable<AuthSession>;
}
