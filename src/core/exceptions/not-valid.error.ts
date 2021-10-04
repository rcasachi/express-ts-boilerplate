import { ERROR_400, STATUS_FAIL } from '../locales/exception.locales';

const notValidError = (errors: any[], message = ERROR_400) => {
  return {
    errors,
    message,
    statusCode: 400,
    status: STATUS_FAIL,
  };
};

export default notValidError;
