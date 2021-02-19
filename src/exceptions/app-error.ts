const appError = (message = 'Internal Server Error', statusCode = 500) => {
  return {
    message,
    statusCode,
    status: `${statusCode}`.startsWith('4') ? 'fail' : 'error',
  };
};

export default appError;
