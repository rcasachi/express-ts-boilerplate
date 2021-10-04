import { ERROR_500, STATUS_ERROR, STATUS_FAIL } from '../locales/exception.locales';

const appError = (message = ERROR_500, statusCode = 500) => {
  return {
    message,
    statusCode,
    status: `${statusCode}`.startsWith('4') ? STATUS_FAIL : STATUS_ERROR,
  };
};

export default appError;
