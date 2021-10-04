/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from './users.entity';

const userSerialized = (user: User) => {
  const { password, updatedAt, ...serialized } = user;
  return serialized;
};

const userListSerialized = (users: User[]) => {
  const serialized = users.map((user: User) => userSerialized(user));
  return serialized;
};

export { userSerialized, userListSerialized };
