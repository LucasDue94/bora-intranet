export interface AuthMenuItemDTO {
  label: string;
  icon?: string;
  routerLink?: string | string[];
  visible?: boolean;
  disabled?: boolean;
  items?: AuthMenuItemDTO[];
}

export interface AuthTokenDTO {
  accessToken: string;
  refreshToken?: string;
}

export interface AuthUserDTO {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  roles?: string[];
  permissions?: string[];
}

export interface AuthSessionDTO {
  token: AuthTokenDTO;
  user: AuthUserDTO;
  menu: AuthMenuItemDTO[];
}
