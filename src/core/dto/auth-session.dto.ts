export interface AuthUserDTO {
  id: string;
  email: string;
  username: string;
  role: string;
  isEmailVerified: boolean;
  isOnboarded: boolean;
}

export interface AuthSessionDTO {
  access_token: string;
  user: AuthUserDTO;
}
