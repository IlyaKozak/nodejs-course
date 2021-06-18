import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column({ nullable: true })
  order!: number;

  @Column()
  description!: string;

  @Column({ nullable: true })
  userId!: string;

  @Column({ nullable: true })
  boardId!: string;

  @Column({ nullable: true })
  columnId!: string;
}
