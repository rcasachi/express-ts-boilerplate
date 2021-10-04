import { Router } from 'express';

import { index } from './app.controller';

const AppRoute = Router();

AppRoute.get('/', index);

export { AppRoute };
