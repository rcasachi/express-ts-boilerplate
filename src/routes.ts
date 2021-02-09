import { Router } from 'express';

import { index, testPost } from './controllers/main.controller';
import mainValidation from './validations/main.validation';

const routes = Router();

routes.get('/', index);
routes.post('/', mainValidation, testPost);

export default routes;
