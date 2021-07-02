import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class Column {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsInt()
  order!: number;
}
