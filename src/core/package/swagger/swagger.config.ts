import { swagger } from '../../config/swagger';
import { useModuleSwagger } from '../module/module.package';

export const generalConfiguration = () => {
  const swaggerDataModules = useModuleSwagger(swagger.mainModule);

  return {
    openapi: '3.0.0',
    explore: false,
    info: {
      title: swagger.applicationTitle,
      version: swagger.applicationVersion,
      description: swagger.applicationDescription,
    },
    paths: swaggerDataModules.paths,
    components: {
      schemas: swaggerDataModules.schemas,
    },
  };
};
