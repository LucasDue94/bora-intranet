import { AuthMenuItem } from './auth-menu-item';
import { AuthUser } from './auth-user';

export interface AuthToken {
  accessToken: string;
  refreshToken?: string;
}

export interface AuthSession {
  token: AuthToken;
  user: AuthUser;
  menu: AuthMenuItem[];
}
