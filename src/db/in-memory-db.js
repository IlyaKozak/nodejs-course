const USERS = 'USERS';
const BOARDS = 'BOARDS';

const DBMS = (function createDBMS() {
  const DB = {
    USERS: [],
    BOARDS: [],
    TASKS: [],
    getAllEntities(table) {
      return DB[table];
    },
    getEntityById(table, id) {
      return DB[table].find((entity) => entity.id === id);
    },
    postEntity(table, entity) {
      DB[table].push(entity);
      return entity;
    },
    putEntity(table, id, entityToUpdate) {
      const entityIdx = DB[table].findIndex((entity) => entity.id === id);
      if (entityIdx === -1) return undefined;
      
      const entity = DB[table][entityIdx];
      Object.keys(entity).forEach((key) => {
        if (entityToUpdate[key] !== undefined) {
          entity[key] = entityToUpdate[key];
        }
      });
      return DB[table][entityIdx];
    },
    deleteEntity(table, id) {
      const entityIdx = DB[table].findIndex((entity) => entity.id === id);
      if (entityIdx === -1) return undefined;

      DB[table].splice(entityIdx, 1);
      DB.cleanUpTasks(table, id);
      return {};
    },
    cleanUpTasks(table, id) {
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

module.exports = DBMS;