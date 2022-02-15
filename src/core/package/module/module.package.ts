import { Express } from 'express';

import { Module } from './module.interface';
import { flattenModule } from './module.utils';

export const useModuleRoutes = (module: Module, app: Express) => {
  const [...modulesRoutes] = module.imports
    .map(({ routes }) => routes)
    .filter((e) => e !== undefined);
  const appRoutes = [...modulesRoutes, ...module.routes];

  appRoutes.map((route) => app.use(route));
};

export const useModuleSwagger = (module: Module) => {
  const arrayModulesSwagger = module.imports.map(({ swagger }) => swagger);
  const modulesSwagger = [].concat(...arrayModulesSwagger);
  const swaggers = [...modulesSwagger, ...module.swagger];

  const schemas = flattenModule(swaggers, 'schemas');
  const paths = flattenModule(swaggers, 'paths');

  return {
    schemas,
    paths,
  };
};
