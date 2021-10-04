import cors from 'cors';
import express, { Express } from 'express';

const middlewares = (app: Express) => {
  app.use(cors());
  app.use(express.json());
};

export default middlewares;
