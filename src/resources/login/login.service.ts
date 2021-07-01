import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { Repository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../users/entities/user.entity';
import { CreateLoginDto } from './dto/create-login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
    private configService: ConfigService,
  ) {}

  async create(createLoginDto: CreateLoginDto) {
    try {
      const { login, password } = createLoginDto;

      const user = await this.usersRepo.findOneOrFail({ where: { login } });

      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      }

      const jwtSecret = this.configService.get('JWT_SECRET_KEY');
      const token = jwt.sign({ userId: user.id, login }, jwtSecret);

      return {
        token,
      };
    } catch {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
