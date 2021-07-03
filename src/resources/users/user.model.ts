import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';

interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

interface IUserResponse {
  id: string;
  name: string;
  login: string;
}

class User implements IUser {
  id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = bcrypt.hashSync(password);
  }

  static toResponse(user: IUser): IUserResponse {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export {
  User,
  IUser,
  IUserResponse,
};
