import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';

import { AppModule } from './app.module';
import connection from './core/database/connection';
import exceptions from './core/exceptions';
import middlewares from './core/middleware';
import notFound from './core/middleware/not-found.middleware';
import { useModuleRoutes } from './core/package/module/module.package';
import { swaggerDocs } from './core/package/swagger/swagger.package';
import uniqueValidation from './core/validation/unique.validation';

dotenv.config();
const app = express();

connection();
uniqueValidation();
middlewares(app);
swaggerDocs(app);
useModuleRoutes(AppModule, app);
app.all('*', notFound);
app.use(exceptions);

export default app;
