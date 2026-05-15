import { AuthUser } from './auth-user';

export interface AuthToken {
  accessToken: string;
}

export interface AuthSession {
  token: AuthToken;
  user: AuthUser;
}
