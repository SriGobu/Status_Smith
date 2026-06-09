/**
 * Sends a JSON response with the specified status code, message, data, and meta information.
 * @param {*} res - The Express response object.
 * @param {number} statusCode - The HTTP status code for the response.
 * @param {string} message - The message for the response.
 * @param {*} data - The data for the response.
 * @param {*} meta - The meta information for the response.
 * @returns {Object} - The JSON response object.
 * @example
 * sendResponse(res, 200, "Success", { id: 1 }, { page: 1, limit: 10 });
 * // Response:
 * // {
 * //   success: true,
 * //   statusCode: 200,
 * //   message: "Success",
 * //   data: { id: 1 },
 * //   meta: { page: 1, limit: 10 }
 * // }
 * @example
 * sendResponse(res, 400, "Bad Request");
 * // Response:
 * // {
 * //   success: false,
 * //   statusCode: 400,
 * //   message: "Bad Request"
 * // }
 */
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
    message,
  };

  if (data !== null) {
    response.data = data;
  }

  if (
    meta !== null &&
    meta !== undefined &&
    typeof meta === "object" &&
    Object.keys(meta).length > 0
  ) {
    response.meta = meta;
  }

  return res.status(statusCode).json(response);
};
