import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnDecorator,
  BaseEntity,
  ManyToOne,
} from 'typeorm';

import { Board } from './board.entity';
import { TABLE } from '../../common/constants';

@Entity(TABLE.COLUMNS)
export class Column extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ColumnDecorator()
  title!: string;

  @ColumnDecorator({ nullable: true })
  order!: number;

  @ManyToOne(() => Board, (board) => board.columns, {
    onDelete: 'CASCADE',
  })
  board!: Board;
}
