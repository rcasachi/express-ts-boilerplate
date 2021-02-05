import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('it is working');
});

export default routes;
