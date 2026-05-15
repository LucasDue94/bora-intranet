export interface AuthUser {
  id: string;
  email: string;
  username: string;
  role: string;
  isEmailVerified: boolean;
  isOnboarded: boolean;
}
