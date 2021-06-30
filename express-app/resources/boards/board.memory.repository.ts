// import { DeleteResult, getRepository, UpdateResult } from 'typeorm';

// import { Board } from '../../../src/db/entities';
// import { IBoard } from './board.model';

// const create = async (entity: IBoard): Promise<IBoard> => {
//   const boardToSave = await getRepository(Board).create(entity as Board);
//   return getRepository(Board).save(boardToSave);
// };

// const readAll = async (): Promise<IBoard[]> => getRepository(Board).find();

// const readById = async (id: string): Promise<IBoard | undefined> =>
//   getRepository(Board).findOne({ where: { id } });

// const updateById = async (
//   id: string,
//   entityToUpdate: IBoard,
// ): Promise<UpdateResult> => {
//   const boardToUpdate = {
//     title: entityToUpdate.title,
//   };
//   // TODO: columns cascade update for board columns
//   return getRepository(Board).update(id, boardToUpdate as Board);
// };

// const deleteById = async (id: string): Promise<DeleteResult> => {
//   // await getRepository(Task).delete({ boardId: id });
//   return getRepository(Board).delete(id);
// };

// export { create, readAll, readById, updateById, deleteById };
