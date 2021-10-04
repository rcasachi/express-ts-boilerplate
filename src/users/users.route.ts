import { Router } from 'express';

import { store } from './users.controller';
import { usersPostValidation } from './users.validation';

const UsersRoute = Router();

UsersRoute.post('/users', usersPostValidation, store);

export { UsersRoute };
