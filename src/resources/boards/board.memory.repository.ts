import { DBMS as db } from '../../db/in-memory-db';
import TABLE from '../../common/constants';
import { IBoard } from './board.model';

const { BOARDS } = TABLE;

const create = async (entity: IBoard) => db.postEntity(BOARDS, entity);
const readAll = async () => db.getAllEntities(BOARDS);
const readById = async (id: string) => db.getEntityById(BOARDS, id);
const updateById = async (id: string, entityToUpdate: IBoard) => db.putEntity(BOARDS, id, entityToUpdate);
const deleteById = async (id: string) => db.deleteEntity(BOARDS, id);

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
