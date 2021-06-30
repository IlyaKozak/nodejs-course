import { IColumn } from '../models/column.model';

export class CreateBoardDto {
  id!: string;
  title!: string;
  columns!: Array<IColumn>;
}
