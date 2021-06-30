// import { getRepository } from 'typeorm';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

// import { User } from '../../src/users/entities/user.entity';
// import { JWT_SECRET_KEY } from '../../src/common/config';

// const signToken = (
//   login: string,
//   password: string,
// ): Promise<string | null> => {
//   const user = await getRepository(User).findOne({ where: { login } });
//   if (!user) {
//     return null;
//   }

//   const isPasswordCorrect = await bcrypt.compare(password, user.password);
//   if (!isPasswordCorrect) {
//     return null;
//   }

//   const { id } = user;
//   const token = jwt.sign({ userId: id, login }, JWT_SECRET_KEY as string);
//   return token;
// };

// export { signToken };
