import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { User } from '../../db/entities';
import { JWT_SECRET_KEY } from '../../common/config';

const signToken = async (login: string, password: string): Promise<string | null> => {
  const user = await getRepository(User).findOne({ where: { login } });
  if (!user) {
    return null;
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return null;
  }

  const { id } = user;
  const token = jwt.sign({ userId: id, login }, JWT_SECRET_KEY as string);
  return token;
};

export {
  signToken,
};
