import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnDecorator,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Column } from './Column';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ColumnDecorator()
  title!: string;

  @OneToMany(() => Column, (column) => column.id)
  columns!: Column[];
}
