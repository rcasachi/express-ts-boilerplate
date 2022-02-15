import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

import { SERVER_ENV } from '../../config/env';
import { generalConfiguration } from './swagger.config';

export const swaggerDocs = (app: Express, route = '/docs') => {
  if (SERVER_ENV === 'development') {
    app.use(route, swaggerUi.serve, swaggerUi.setup(generalConfiguration()));
  }
};
