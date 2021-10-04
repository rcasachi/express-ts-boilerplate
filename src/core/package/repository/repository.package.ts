import {
  DeepPartial,
  EntityTarget,
  FindConditions,
  FindManyOptions,
  UpdateResult,
  getRepository,
} from 'typeorm';

export const list = async <T>(model: EntityTarget<T>, options?: FindManyOptions): Promise<T[]> =>
  getRepository(model).find(options);

export const create = async <T>(model: EntityTarget<T>, data: DeepPartial<T>[]): Promise<T[]> => {
  const repository = getRepository(model);
  const result = repository.create(data);
  return repository.save(result);
};

export const readById = async <T>(model: EntityTarget<T>, id: string | number): Promise<T> =>
  getRepository(model).findOne(id);

export const update = async <T>(
  model: EntityTarget<unknown>,
  id: string | number | FindConditions<T>,
  data: DeepPartial<unknown>,
): Promise<UpdateResult> => {
  const repository = getRepository(model);
  return repository.update(id, data);
};

export const readByField = async <T>(
  model: EntityTarget<T>,
  field: string,
  value: unknown,
): Promise<T> => {
  const repository = getRepository(model);

  const result = await repository.findOne({
    where: {
      [field]: value,
    },
  });

  return result;
};

export const deleteRow = async (model: EntityTarget<unknown>, id) => {
  const repository = getRepository(model);

  await repository.findOneOrFail(id);
  const result = await repository.delete(id);
  return result;
};

export const softDeleteRow = async <T>(model: EntityTarget<T>, id) => {
  const repository = getRepository(model);
  await repository.softDelete(id);
};
