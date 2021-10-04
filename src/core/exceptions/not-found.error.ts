import { ERROR_404, STATUS_FAIL } from '../locales/exception.locales';

const notFoundError = (message = ERROR_404) => {
  return {
    message,
    statusCode: 404,
    status: STATUS_FAIL,
  };
};

export default notFoundError;
