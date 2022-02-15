import { Module } from '../core/package/module/module.interface';
import { UsersRoute } from './users.route';
import { UsersSwaggerDefinition } from './users.swagger';

export const UsersModule: Module = {
  routes: [UsersRoute],
  swagger: [UsersSwaggerDefinition],
};
