import { User } from '../../../users/users.entity';

export const TABLES_ENTITIES = {
  users: User,
};

export const getEntityByTableName = (tableName: string) => TABLES_ENTITIES[tableName];
