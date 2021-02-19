const errors = (message: string, statusCode: number, status: string, errorList: [] = []) => ({
  message,
  statusCode,
  status,
  errors: errorList,
});

export default errors;
