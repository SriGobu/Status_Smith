export const MESSAGE = {
  // 2xx - Success
  success: (msg) => msg || "Request completed successfully.",
  created: (msg) => msg || "Resource created successfully.",
  accepted: (msg) => msg || "Request accepted and is being processed.",
  noContent: (msg) => msg || "No content to return.",
  // 3xx - Redirection
  movedPermanently: (msg) => msg || "This resource has been moved permanently.",
  found: (msg) => msg || "Resource found at a different location.",
  notModified: (msg) => msg || "Resource has not been modified.",

  // 4xx - Client Errors
  badRequest: (msg) =>
    msg || "The request could not be understood. Please check your input.",
  unauthorized: (msg) =>
    msg || "You are not authorized. Please login and try again.",
  forbidden: (msg) =>
    msg || "You do not have permission to access this resource.",
  notFound: (msg) => msg || "The requested resource was not found.",
  methodNotAllowed: (msg) =>
    msg || "This HTTP method is not allowed for this route.",
  conflict: (msg) =>
    msg || "A conflict occurred. The resource may already exist.",
  gone: (msg) => msg || "This resource has been permanently deleted.",
  unprocessableEntry: (msg) =>
    msg || "Validation failed. Please check your input fields",
  tooManyRequests: (msg) =>
    msg || "Too many requests. Please slow down and try again later.",

  // 5xx - Server Errors
  serverError: (msg) =>
    msg || "Something went wrong on our end. Please try again later.",
  notImplemented: (msg) => msg || "This feature is not yet implemented.",
  badGateway: (msg) =>
    msg || "Received an invalid response from the upstream server.",
  serviceUnavailable: (msg) =>
    msg || "Service is temporarily unavailable. Please try again later.",
  gatewayTimeout: (msg) =>
    msg || "The server took too long to respond. Please try again.",
};

export const MESSAGE_CAPS = {
  // 2xx - Success
  SUCCESS: (msg) => msg || "Request completed successfully.",
  CREATED: (msg) => msg || "Resource created successfully.",
  ACCEPTED: (msg) => msg || "Request accepted and is being processed.",
  NO_CONTENT: (msg) => msg || "No content to return.",
  // 3xx - Redirection
  MOVED_PERMANENTLY: (msg) =>
    msg || "This resource has been moved permanently.",
  FOUND: (msg) => msg || "Resource found at a different location.",
  NOT_MODIFIED: (msg) => msg || "Resource has not been modified.",

  // 4xx - Client Errors
  BAD_REQUEST: (msg) =>
    msg || "The request could not be understood. Please check your input.",
  UN_AUTHORIZED: (msg) =>
    msg || "You are not authorized. Please login and try again.",
  FORBIDDEN: (msg) =>
    msg || "You do not have permission to access this resource.",
  NOT_FOUND: (msg) => msg || "The requested resource was not found.",
  METHOD_NOT_ALLOWED: (msg) =>
    msg || "This HTTP method is not allowed for this route.",
  CONFLICT: (msg) =>
    msg || "A conflict occurred. The resource may already exist.",
  GONE: (msg) => msg || "This resource has been permanently deleted.",
  UN_PROCESSABLE_ENTRY: (msg) =>
    msg || "Validation failed. Please check your input fields",
  TOO_MANY_REQUESTS: (msg) =>
    msg || "Too many requests. Please slow down and try again later.",

  // 5xx - Server Errors
  SERVER_ERROR: (msg) =>
    msg || "Something went wrong on our end. Please try again later.",
  NOT_IMPLEMENTED: (msg) => msg || "This feature is not yet implemented.",
  BAD_GATEWAY: (msg) =>
    msg || "Received an invalid response from the upstream server.",
  SERVICE_UNAVAILABLE: (msg) =>
    msg || "Service is temporarily unavailable. Please try again later.",
  GATEWAY_TIMEOUT: (msg) =>
    msg || "The server took too long to respond. Please try again.",
};
