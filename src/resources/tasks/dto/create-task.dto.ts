import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsInt,
  IsUUID,
} from 'class-validator';

export class CreateTaskDto {
  @IsOptional()
  @IsUUID()
  id!: string;

  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsOptional()
  @IsInt()
  order?: number;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  boardId?: string;

  @IsOptional()
  @IsString()
  columnId?: string;
}
