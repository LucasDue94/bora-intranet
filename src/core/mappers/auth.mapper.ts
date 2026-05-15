import { AuthSession } from '../domain/auth-session';
import { AuthSessionDTO, AuthUserDTO } from '../dto/auth-session.dto';
import { LoginRequestDTO } from '../dto/login-request.dto';

export class AuthMapper {
  static toDomain(dto: AuthSessionDTO): AuthSession {
    return {
      token: {
        accessToken: dto.access_token,
      },
      user: {
        id: dto.user.id,
        email: dto.user.email,
        username: dto.user.username,
        role: dto.user.role,
        isEmailVerified: dto.user.isEmailVerified,
        isOnboarded: dto.user.isOnboarded,
      },
    };
  }

  static toDTO(domain: AuthSession): AuthSessionDTO {
    return {
      access_token: domain.token.accessToken,
      user: this.toUserDTO(domain),
    };
  }

  static toLoginRequestDTO(emailOrUsername: string, password: string): LoginRequestDTO {
    return {
      emailOrUsername,
      password,
    };
  }

  private static toUserDTO(domain: AuthSession): AuthUserDTO {
    return {
      id: domain.user.id,
      email: domain.user.email,
      username: domain.user.username,
      role: domain.user.role,
      isEmailVerified: domain.user.isEmailVerified,
      isOnboarded: domain.user.isOnboarded,
    };
  }
}
