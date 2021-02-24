import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';

import connection from './database/connection';
import exceptions from './exceptions';
import middlewares from './middlewares';
import notFound from './middlewares/not-found';
import routes from './routes';

dotenv.config();
const app = express();

connection();
middlewares(app);
app.use(routes);
app.all('*', notFound);
app.use(exceptions);

export default app;
