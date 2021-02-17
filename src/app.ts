import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';

import connection from './database/connection';
import routes from './routes';
import middlewares from './middlewares';
import exceptions from './exceptions';
import notFound from './middlewares/not-found';

dotenv.config();
const app = express();

connection();
middlewares(app);
app.use(routes);
app.all('*', notFound);
app.use(exceptions);

export default app;
