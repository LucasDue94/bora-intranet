import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { AuthSession } from '../../core/domain/auth-session';
import { AuthSessionDTO } from '../../core/dto/auth-session.dto';
import { AuthMapper } from '../../core/mappers/auth.mapper';
import { AuthRepositoryPort } from '../../core/ports/auth-repository.port';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthHttpRepository extends AuthRepositoryPort {
  private readonly http = inject(HttpClient);
  private readonly loginUrl = `${environment.apiUrl}/admin/auth/login`;

  login(emailOrUsername: string, password: string): Observable<AuthSession> {
    return this.http
      .post<AuthSessionDTO>(this.loginUrl, AuthMapper.toLoginRequestDTO(emailOrUsername, password))
      .pipe(map((response) => AuthMapper.toDomain(response)));
  }
}
