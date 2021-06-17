import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnDecorator,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Column extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ColumnDecorator()
  title!: string;

  @ColumnDecorator({ nullable: true })
  order!: number;
}
