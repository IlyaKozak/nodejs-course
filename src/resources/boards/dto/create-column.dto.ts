import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsUUID,
  IsInt,
} from 'class-validator';

export class CreateColumnDto {
  @IsOptional()
  @IsUUID()
  id!: string;

  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsInt()
  order!: number;
}
