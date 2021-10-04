import { Express } from 'express';

import { Module } from './module.interface';

export const useModuleRoutes = (module: Module, app: Express) => {
  const [...modulesRoutes] = module.imports.map(({ routes }) => routes);
  const appRoutes = [...modulesRoutes, ...module.routes];

  appRoutes.map((route) => app.use(route));
};
