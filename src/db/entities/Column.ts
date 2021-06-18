import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnDecorator,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Board } from '.';

@Entity()
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
