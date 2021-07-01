import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

import { TABLE } from '../../../common/constants';

@Entity(TABLE.TASKS)
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column({ default: null })
  order!: number;

  @Column()
  description!: string;

  @Column({ default: null })
  userId!: string;

  @Column({ default: null })
  boardId!: string;

  @Column({ nullable: true })
  columnId!: string;
}
