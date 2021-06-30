import { v4 as uuid } from 'uuid';

interface ITask {
  id: string;
  title: string;
  order: number | null;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;
}

class Task implements ITask {
  id: string;

  title: string;

  order: number | null;

  description: string;

  userId: string | null;

  boardId: string | null;

  columnId: string | null;

  constructor({
    id = uuid(),
    title = 'TASK',
    order = null,
    description = 'TASK DESCRIPTION',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

export { Task, ITask };
