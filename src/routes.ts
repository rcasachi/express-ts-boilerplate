import { Router } from 'express';

import { index } from './controllers/main.controller';

const routes = Router();

routes.get('/', index);

export default routes;
