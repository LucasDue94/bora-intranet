import { AuthMenuItem } from '../domain/auth-menu-item';
import { AuthSession } from '../domain/auth-session';
import {
  AuthMenuItemDTO,
  AuthSessionDTO,
  AuthTokenDTO,
  AuthUserDTO,
} from '../dto/auth-session.dto';
import { LoginRequestDTO } from '../dto/login-request.dto';

export class AuthMapper {
  static toDomain(dto: AuthSessionDTO): AuthSession {
    return {
      token: {
        accessToken: dto.token.accessToken,
        refreshToken: dto.token.refreshToken,
      },
      user: {
        id: dto.user.id,
        name: dto.user.name,
        email: dto.user.email,
        avatarUrl: dto.user.avatarUrl,
        roles: dto.user.roles ?? [],
        permissions: dto.user.permissions ?? [],
      },
      menu: dto.menu.map((item) => this.toMenuItemDomain(item)),
    };
  }

  static toDTO(domain: AuthSession): AuthSessionDTO {
    return {
      token: this.toTokenDTO(domain),
      user: this.toUserDTO(domain),
      menu: domain.menu.map((item) => this.toMenuItemDTO(item)),
    };
  }

  static toLoginRequestDTO(email: string, password: string): LoginRequestDTO {
    return {
      email,
      password,
    };
  }

  private static toTokenDTO(domain: AuthSession): AuthTokenDTO {
    return {
      accessToken: domain.token.accessToken,
      refreshToken: domain.token.refreshToken,
    };
  }

  private static toUserDTO(domain: AuthSession): AuthUserDTO {
    return {
      id: domain.user.id,
      name: domain.user.name,
      email: domain.user.email,
      avatarUrl: domain.user.avatarUrl,
      roles: domain.user.roles ?? [],
      permissions: domain.user.permissions ?? [],
    };
  }

  private static toMenuItemDomain(dto: AuthMenuItemDTO): AuthMenuItem {
    return {
      label: dto.label,
      icon: dto.icon,
      routerLink: dto.routerLink,
      visible: dto.visible,
      disabled: dto.disabled,
      items: dto.items?.map((item) => this.toMenuItemDomain(item)),
    };
  }

  private static toMenuItemDTO(domain: AuthMenuItem): AuthMenuItemDTO {
    return {
      label: domain.label,
      icon: domain.icon,
      routerLink: domain.routerLink,
      visible: domain.visible,
      disabled: domain.disabled,
      items: domain.items?.map((item) => this.toMenuItemDTO(item)),
    };
  }
}
