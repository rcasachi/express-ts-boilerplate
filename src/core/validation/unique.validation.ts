import { getValue } from 'indicative-utils';
import { extend } from 'indicative/validator';

import { getEntityByTableName } from '../package/repository/entities.package';
import { readByField } from '../package/repository/repository.package';

const UNIQUE_EXCEPTION = 'Unique rule needs the table and column name';

const uniqueValidation = () => {
  extend('unique', {
    async: true,

    compile(args) {
      if (args.length !== 2) {
        throw new Error(UNIQUE_EXCEPTION);
      }
      return args;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async validate(data, field, args, _config) {
      const fieldValue = getValue(data, field);
      const [tableName, fieldName] = args;

      const entity = getEntityByTableName(tableName);

      const record = await readByField(entity, fieldName, fieldValue);

      if (record) {
        return false;
      }

      return true;
    },
  });
};

export default uniqueValidation;
