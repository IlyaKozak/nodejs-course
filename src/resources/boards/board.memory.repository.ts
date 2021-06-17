import { DeleteResult, getRepository } from 'typeorm';

import { Board } from '../../db/entities/Board';
import { IBoard } from './board.model';

// const create = async (entity: IBoard): Promise<IBoard> => (
//   getRepository(Board).save(entity)
// );

const readAll = async (): Promise<IBoard[]> => (
  getRepository(Board).find()
);

const readById = async (id: string): Promise<IBoard | undefined> => (
  getRepository(Board).findOne({ where: { id } })
);

// const updateById = async (id: string, entityToUpdate: IBoard): Promise<UpdateResult> => (
//   getRepository(Board).update(id, entityToUpdate)
// );

const deleteById = async (id: string): Promise<DeleteResult> => (
  getRepository(Board).delete(id)
);

export {
  // create,
  readAll,
  readById,
  // updateById,
  deleteById,
};
