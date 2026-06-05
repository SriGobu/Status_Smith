export const sendResponse = (
  res,
  statusCode,
  message,
  data = null,
  meta = {},
) => {
  if (typeof statusCode !== "number" || statusCode < 100 || statusCode > 599) {
    statusCode = 500;
    message = "Invalid status code provided.";
  }

  // only consider 2xx status codes as success
  // 3xx are redirections, 4xx are client errors, and 5xx are server errors
  const isSuccess = statusCode >= 200 && statusCode < 300;

  const response = {
    success: isSuccess,
    statusCode,
    message,
  };

  if (data !== null) {
    response.data = data;
  }

  if (meta && Object.keys(meta).length > 0) {
    response.meta = meta;
  }

  return res.status(statusCode).json(response);
};
