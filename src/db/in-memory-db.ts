import TABLE from '../common/constants';

import { IUser } from '../resources/users/user.model';
import { IBoard } from '../resources/boards/board.model';
import { ITask } from '../resources/tasks/task.model';

type Entity = (IUser | IBoard | ITask);

const { USERS, BOARDS, TASKS } = TABLE;

const DBMS = (() => {
  const DB = {
    USERS: [] as IUser[],
    BOARDS: [] as IBoard[],
    TASKS: [] as ITask[],
    getAllEntities(table: TABLE) {
      return DB[table];
    },
    getEntityById(table: TABLE, id: string) {
      const entityIdx = DB[table].findIndex((entity: Entity) => entity.id === id);
      if (entityIdx === -1) return undefined;

      return DB[table][entityIdx];
    },
    postEntity(table: TABLE, entity: Entity) {
      if (table === USERS) DB[table].push(entity as IUser);
      if (table === BOARDS) DB[table].push(entity as IBoard);
      if (table === TASKS) DB[table].push(entity as ITask);
      return entity;
    },
    putEntity(table: TABLE, id: string, entityToUpdate: Entity) {
      const entityIdx = DB[table].findIndex((entity: Entity) => entity.id === id);
      if (entityIdx === -1) return undefined;

      const entity = DB[table][entityIdx];
      if (!entity) return undefined;

      DB[table][entityIdx] = {
        ...entity,
        ...entityToUpdate,
      }
      return DB[table][entityIdx];
    },
    deleteEntity(table: TABLE, id: string): (Entity | undefined) {
      const entityIdx = DB[table].findIndex((entity: Entity) => entity.id === id);
      if (entityIdx === -1) return;

      const entity = DB[table][entityIdx];
      DB[table].splice(entityIdx, 1);
      DB.cleanUpTasks(table, id);
      return entity;
    },
    cleanUpTasks(table: TABLE, id: string): void {
      if (table === USERS) {
        DB.TASKS = DB.TASKS.map((task) => {
          if (task.userId === id) {
            return {
              ...task,
              userId: null,
            };
          }
          return task;
        });
      }
      if (table === BOARDS) {
        DB.TASKS = DB.TASKS.filter((task) => task.boardId !== id);
      }
    }
  };

  return {
    getAllEntities: DB.getAllEntities,
    getEntityById: DB.getEntityById,
    postEntity: DB.postEntity,
    putEntity: DB.putEntity,
    deleteEntity: DB.deleteEntity,
  }
})();

export {
  DBMS,
  Entity,
};
