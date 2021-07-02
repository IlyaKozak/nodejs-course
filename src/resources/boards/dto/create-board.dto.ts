import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsUUID,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { Column } from '../models/column.model';

export class CreateBoardDto {
  @IsOptional()
  @IsUUID()
  id!: string;

  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Column)
  columns!: Array<Column>;
}
