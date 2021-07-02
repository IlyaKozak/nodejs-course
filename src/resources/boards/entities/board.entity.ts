import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Column as ColumnModel } from '../models/column.model';

@Entity({ name: 'boards' })
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column({ type: 'json', array: false })
  columns!: Array<ColumnModel>;
}
