import { create } from '../core/package/repository/repository.package';
import { User } from './users.entity';

export const saveUser = async (user) => {
  await create<User>(User, [user]);
};
