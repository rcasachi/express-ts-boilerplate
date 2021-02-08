const appError = (
  message: string = 'Internal Server Error',
  statusCode: number = 500,
) => {
  return {
    message,
    statusCode,
    status: `${statusCode}`.startsWith('4') ? 'fail' : 'error',
  };
};

export default appError;
