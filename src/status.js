export const STATUS = Object.freeze({
  // 2xx - Success
  success: 200,
  created: 201,
  accepted: 202,
  noContent: 204,

  // 3xx - Redirection
  movedPermanently: 301,
  found: 302,
  notModified: 304,

  // 4xx - Client Errors
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  methodNotAllowed: 405,
  conflict: 409,
  gone: 410,
  unprocessableEntry: 422,
  tooManyRequests: 429,

  // 5xx - Server Errors
  serverError: 500,
  notImplemented: 501,
  badGateway: 502,
  serviceUnavailable: 503,
  gatewayTimeout: 504,
});

export const STATUS_CAPS = Object.freeze({
  // 2xx - Success
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,

  // 3xx - Redirection
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  NOT_MODIFIED: 304,

  // 4xx - Client Errors
  BAD_REQUEST: 400,
  UN_AUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  GONE: 410,
  UN_PROCESSABLE_ENTRY: 422,
  TOO_MANY_REQUESTS: 429,

  // 5xx - Server Errors
  SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
});
