import {
  getRepository,
  EntityTarget,
  FindManyOptions,
  DeepPartial,
} from 'typeorm';

export const list = async (
  model: EntityTarget<unknown>,
  options: FindManyOptions,
) => {
  const result = await getRepository(model).find(options);
  return result;
};

export const create = async (
  model: EntityTarget<unknown>,
  data: DeepPartial<unknown>[],
) => {
  const repository = getRepository(model);

  const result = repository.create(data);
  const resultInserted = await repository.save(result);
  return resultInserted;
};

export const readById = async (model: EntityTarget<unknown>, id: any) => {
  const repository = getRepository(model);
  const result = await repository.findOneOrFail(id);
  return result;
};

export const update = async (
  model: EntityTarget<unknown>,
  id: any,
  data: DeepPartial<unknown>[],
) => {
  const repository = getRepository(model);

  await repository.findOneOrFail(id);
  const result = await repository.update(id, data);
  return result;
};

export const deleteRow = async (model: EntityTarget<unknown>, id: any) => {
  const repository = getRepository(model);

  await repository.findOneOrFail(id);
  const result = await repository.delete(id);
  return result;
};
