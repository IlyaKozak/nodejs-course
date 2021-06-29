import { v4 as uuid } from 'uuid';

import { IColumn } from '../columns/column.model';

interface IBoard {
  id: string;
  title: string;
  columns: Array<IColumn>;
}

class Board implements IBoard {
  id: string;

  title: string;

  columns: Array<IColumn>;

  constructor({ id = uuid(), title = 'BOARD', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export { Board, IBoard };
