import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';

import { AppModule } from './app.module';
import { useModuleRoutes } from './core/package/module/module.package';
import connection from './database/connection';
import exceptions from './exceptions';
import middlewares from './middlewares';
import notFound from './middlewares/not-found';

dotenv.config();
const app = express();

connection();
middlewares(app);
useModuleRoutes(AppModule, app);
app.all('*', notFound);
app.use(exceptions);

export default app;
