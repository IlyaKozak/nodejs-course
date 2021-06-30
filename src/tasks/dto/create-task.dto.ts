export class CreateTaskDto {
  id!: string;

  title!: string;

  order!: number | null;

  description!: string;

  userId!: string | null;

  boardId!: string | null;

  columnId!: string | null;
}
