import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

import { TABLE } from '../../common/constants';

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

  @Column()
  password!: string;
}
