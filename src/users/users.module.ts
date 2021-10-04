import { Module } from '../core/package/module/module.interface';
import { UsersRoute } from './users.route';

export const UsersModule: Module = {
  routes: [UsersRoute],
};
