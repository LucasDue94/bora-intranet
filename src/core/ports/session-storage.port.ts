import { AuthSession } from '../domain/auth-session';

export abstract class SessionStoragePort {
  abstract save(session: AuthSession): void;
  abstract clear(): void;
}
