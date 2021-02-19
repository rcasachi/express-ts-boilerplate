const notValidError = (errors: [], message = 'Bad Request') => {
  return {
    errors,
    message,
    statusCode: 400,
    status: 'fail',
  };
};

export default notValidError;
