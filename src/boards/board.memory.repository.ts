import { DeleteResult, getRepository } from 'typeorm';

import { Board as BoardEntity } from './entities/board.entity';
import { Task as TaskEntity } from '../tasks/entities/task.entity';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

const create = async (entity: CreateBoardDto): Promise<any> => {
  const boardToSave = await getRepository(BoardEntity).create(entity as any);
  console.log(boardToSave);
  return getRepository(BoardEntity).save(boardToSave);
};

const readAll = async (): Promise<Board[]> => getRepository(BoardEntity).find();

const readById = async (id: string): Promise<Board | undefined> =>
  getRepository(BoardEntity).findOne({ where: { id } });

const updateById = async (
  id: string,
  entityToUpdate: UpdateBoardDto,
): Promise<any> => {
  const boardToUpdate = {
    title: entityToUpdate.title,
  };
  // TODO: columns cascade update for board columns
  return getRepository(BoardEntity).update(id, boardToUpdate);
};

const deleteById = async (id: string): Promise<DeleteResult> => {
  await getRepository(TaskEntity).delete({ boardId: id });
  return getRepository(BoardEntity).delete(id);
};

export { create, readAll, readById, updateById, deleteById };
