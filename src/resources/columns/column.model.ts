import { v4 as uuid } from 'uuid';

interface IColumn {
  id: string;
  title: string;
  order: number | null;
}

class Column implements IColumn {
  id: string;
  title: string;
  order: number | null;

  constructor({
    id = uuid(),
    title = 'COLUMN',
    order = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export {
  Column,
  IColumn,
};
