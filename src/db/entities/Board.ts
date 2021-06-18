import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnDecorator,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Column } from '.';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ColumnDecorator()
  title!: string;

  @OneToMany(() => Column, (column) => column.board, {
    cascade: true,
  })
  columns!: Column[];
}
