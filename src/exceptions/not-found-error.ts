const notFoundError = (message: string = 'Not Found') => {
  return {
    message,
    statusCode: 404,
    status: 'fail',
  };
};

export default notFoundError;
