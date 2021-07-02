import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Column as ColumnEntity } from './column.entity';

@Entity({ name: 'boards' })
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @OneToMany(() => ColumnEntity, (column) => column.board, {
    cascade: true,
    eager: true,
  })
  columns!: ColumnEntity[];
}
