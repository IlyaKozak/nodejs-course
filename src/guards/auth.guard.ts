import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import jwt from 'jsonwebtoken';

import { UNAUTHORIZED_PATHS } from 'src/common/constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const path = request.url.replace(/\/$/, '');

      if (UNAUTHORIZED_PATHS.includes(path)) {
        return true;
      }

      const authHeader = request.headers.authorization;
      let token;
      if (authHeader && /^Bearer .*$/.test(authHeader)) {
        [, token] = authHeader.split(' ');
      }

      const jwtSecret = process.env['JWT_SECRET_KEY'];
      if (token && jwt.verify(token, String(jwtSecret))) {
        return true;
      }
    } catch {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}
