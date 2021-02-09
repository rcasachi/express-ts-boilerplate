const notValidError = (errors: [], message: string = 'Bad Request') => {
  return {
    errors,
    message,
    statusCode: 400,
    status: 'fail',
  };
};

export default notValidError;
