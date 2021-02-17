const errors = (
  message: string,
  statusCode: number,
  status: string,
  errorList: [] = [],
) => {
  return {
    message,
    statusCode,
    status,
    errors: errorList,
  };
};

export default errors;
