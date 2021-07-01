import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  BeforeInsert,
} from 'typeorm';
import { hash } from 'bcryptjs';
import { Exclude } from 'class-transformer';

import { DEFAULT_SALT_LENGTH, TABLE } from '../../../common/constants';

@Entity(TABLE.USERS)
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({
    unique: true,
  })
  login!: string;

  @Exclude()
  @Column()
  password!: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await hash(this.password, DEFAULT_SALT_LENGTH);
  }
}
