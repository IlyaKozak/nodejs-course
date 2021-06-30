import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnDecorator,
  BaseEntity,
  OneToMany,
} from 'typeorm';

import { Column } from './column.entity';
import { TABLE } from '../../common/constants';

@Entity(TABLE.BOARDS)
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ColumnDecorator()
  title!: string;

  @OneToMany(() => Column, (column) => column.board, {
    cascade: true,
    eager: true,
  })
  columns!: Column[];
}
