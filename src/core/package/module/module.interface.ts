import { Router } from 'express';

export interface Module {
  imports?: Module[];
  routes?: Router[];
  providers?: [];
}
