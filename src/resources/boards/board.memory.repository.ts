import { DBMS as db } from '../../db/in-memory-db';
import TABLE from '../../common/constants';
import { IBoard } from './board.model';

const { BOARDS } = TABLE;

const create = async (entity: IBoard): Promise<IBoard> => db.postEntity(BOARDS, entity) as IBoard;

const readAll = async (): Promise<IBoard[]> => db.getAllEntities(BOARDS) as IBoard[];

const readById = async (id: string): Promise<IBoard | undefined> => (
  db.getEntityById(BOARDS, id) as (IBoard | undefined)
);

const updateById = async (id: string, entityToUpdate: IBoard): Promise<IBoard | undefined> => (
  db.putEntity(BOARDS, id, entityToUpdate) as (IBoard | undefined)
);

const deleteById = async (id: string): Promise<IBoard | undefined> => (
  db.deleteEntity(BOARDS, id) as (IBoard | undefined)
);

export {
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
