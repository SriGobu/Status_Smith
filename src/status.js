export const STATUS = Object.freeze({
  /** `success: 200` - Request completed successfully */
  success: 200,
  /** `created: 201` - Resource created successfully */
  created: 201,
  /** `accepted: 202` - Request accepted for processing */
  accepted: 202,
  /** `noContent: 204` - Request completed successfully with no content */
  noContent: 204,
  /** `movedPermanently: 301` - Resource has been moved permanently */
  movedPermanently: 301,
  /** `found: 302` - Resource found at a different location */
  found: 302,
  /** `notModified: 304` - Resource has not been modified */
  notModified: 304,
  /** `badRequest: 400` - Bad request */
  badRequest: 400,
  /** `unauthorized: 401` - Unauthorized */
  unauthorized: 401,
  /** `forbidden: 403` - Forbidden */
  forbidden: 403,
  /** `notFound: 404` - Resource not found */
  notFound: 404,
  /** `methodNotAllowed: 405` - Method not allowed */
  methodNotAllowed: 405,
  /** `conflict: 409` - Conflict */
  conflict: 409,
  /** `gone: 410` - Resource has been removed */
  gone: 410,
  /** `unprocessableEntity: 422` - Unprocessable entity */
  unprocessableEntity: 422,
  /** `tooManyRequests: 429` - Too many requests */
  tooManyRequests: 429,
  /** `serverError: 500` - Internal server error */
  serverError: 500,
  /** `notImplemented: 501` - Not implemented */
  notImplemented: 501,
  /** `badGateway: 502` - Bad gateway */
  badGateway: 502,
  /** `serviceUnavailable: 503` - Service unavailable */
  serviceUnavailable: 503,
  /** `gatewayTimeout: 504` - Gateway timeout */
  gatewayTimeout: 504,
});

export const STATUS_CAPS = Object.freeze({
  /** `SUCCESS: 200` - Request completed successfully */
  SUCCESS: 200,
  /** `CREATED: 201` - Resource created successfully */
  CREATED: 201,
  /** `ACCEPTED: 202` - Request accepted for processing */
  ACCEPTED: 202,
  /** `NO_CONTENT: 204` - Request completed successfully with no content */
  NO_CONTENT: 204,
  /** `MOVED_PERMANENTLY: 301` - Resource has been moved permanently */
  MOVED_PERMANENTLY: 301,
  /** `FOUND: 302` - Resource found at a different location */
  FOUND: 302,
  /** `NOT_MODIFIED: 304` - Resource has not been modified */
  NOT_MODIFIED: 304,
  /** `BAD_REQUEST: 400` - Bad request */
  BAD_REQUEST: 400,
  /** `UN_AUTHORIZED: 401` - Unauthorized */
  UN_AUTHORIZED: 401,
  /** `FORBIDDEN: 403` - Forbidden */
  FORBIDDEN: 403,
  /** `NOT_FOUND: 404` - Resource not found */
  NOT_FOUND: 404,
  /** `METHOD_NOT_ALLOWED: 405` - Method not allowed */
  METHOD_NOT_ALLOWED: 405,
  /** `CONFLICT: 409` - Conflict */
  CONFLICT: 409,
  /** `GONE: 410` - Resource has been removed */
  GONE: 410,
  /** `UN_PROCESSABLE_ENTITY: 422` - Unprocessable entity */
  UN_PROCESSABLE_ENTITY: 422,
  /** `TOO_MANY_REQUESTS: 429` - Too many requests */
  TOO_MANY_REQUESTS: 429,

  /** `SERVER_ERROR: 500` - Internal server error */
  SERVER_ERROR: 500,
  /** `NOT_IMPLEMENTED: 501` - Not implemented */
  NOT_IMPLEMENTED: 501,
  /** `BAD_GATEWAY: 502` - Bad gateway */
  BAD_GATEWAY: 502,
  /** `SERVICE_UNAVAILABLE: 503` - Service unavailable */
  SERVICE_UNAVAILABLE: 503,
  /** `GATEWAY_TIMEOUT: 504` - Gateway timeout */
  GATEWAY_TIMEOUT: 504,
});
