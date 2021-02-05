import express from 'express';
import dotenv from 'dotenv';

import routes from './routes';
import middlewares from './middlewares';

dotenv.config();
const app = express();

middlewares(app);
app.use(routes);

export default app;
