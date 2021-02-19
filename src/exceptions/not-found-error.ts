const notFoundError = (message = 'Not Found') => {
  return {
    message,
    statusCode: 404,
    status: 'fail',
  };
};

export default notFoundError;
