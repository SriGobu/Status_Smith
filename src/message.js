export const MESSAGE = {
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.success(); // "Request completed successfully."
   *   MESSAGE.success("Custom success message"); // "Custom success message"
   */
  success: (msg) => msg || "Request completed successfully.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.created(); // "Resource created successfully."
   *   MESSAGE.created("Custom created message"); // "Custom created message"
   */
  created: (msg) => msg || "Resource created successfully.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.accepted(); // "Request accepted and is being processed."
   *   MESSAGE.accepted("Custom accepted message"); // "Custom accepted message"
   */
  accepted: (msg) => msg || "Request accepted and is being processed.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.noContent(); // "No content to return."
   *   MESSAGE.noContent("Custom no content message"); // "Custom no content message"
   */
  noContent: (msg) => msg || "No content to return.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.movedPermanently(); // "This resource has been moved permanently."
   *   MESSAGE.movedPermanently("Custom moved permanently message"); // "Custom moved permanently message"
   */
  movedPermanently: (msg) => msg || "This resource has been moved permanently.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.found(); // "Resource found at a different location."
   *   MESSAGE.found("Custom found message"); // "Custom found message"
   */
  found: (msg) => msg || "Resource found at a different location.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.notModified(); // "Resource has not been modified."
   *   MESSAGE.notModified("Custom not modified message"); // "Custom not modified message"
   */
  notModified: (msg) => msg || "Resource has not been modified.",

  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.badRequest(); // "The request could not be understood. Please check your input."
   *   MESSAGE.badRequest("Custom bad request message"); // "Custom bad request message"
   */
  badRequest: (msg) =>
    msg || "The request could not be understood. Please check your input.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.unauthorized(); // "You are not authorized. Please login and try again."
   *   MESSAGE.unauthorized("Custom unauthorized message"); // "Custom unauthorized message"
   */
  unauthorized: (msg) =>
    msg || "You are not authorized. Please login and try again.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.forbidden(); // "You do not have permission to access this resource."
   *   MESSAGE.forbidden("Custom forbidden message"); // "Custom forbidden message"
   */
  forbidden: (msg) =>
    msg || "You do not have permission to access this resource.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.notFound(); // "The requested resource was not found."
   *   MESSAGE.notFound("Custom not found message"); // "Custom not found message"
   */
  notFound: (msg) => msg || "The requested resource was not found.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.methodNotAllowed(); // "This HTTP method is not allowed for this route."
   *   MESSAGE.methodNotAllowed("Custom method not allowed message"); // "Custom method not allowed message"
   */
  methodNotAllowed: (msg) =>
    msg || "This HTTP method is not allowed for this route.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.conflict(); // "A conflict occurred. The resource may already exist."
   *   MESSAGE.conflict("Custom conflict message"); // "Custom conflict message"
   */
  conflict: (msg) =>
    msg || "A conflict occurred. The resource may already exist.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.gone(); // "This resource has been permanently deleted."
   *   MESSAGE.gone("Custom gone message"); // "Custom gone message"
   */
  unprocessableEntry: (msg) =>
    msg || "Validation failed. Please check your input fields",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.tooManyRequests(); // "Too many requests. Please slow down and try again later."
   *   MESSAGE.tooManyRequests("Custom too many requests message"); // "Custom too many requests message"
   */
  tooManyRequests: (msg) =>
    msg || "Too many requests. Please slow down and try again later.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.serverError(); // "Something went wrong on our end. Please try again later."
   *   MESSAGE.serverError("Custom server error message"); // "Custom server error message"
   */
  serverError: (msg) =>
    msg || "Something went wrong on our end. Please try again later.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.notImplemented(); // "This feature is not yet implemented."
   *   MESSAGE.notImplemented("Custom not implemented message"); // "Custom not implemented message"
   */
  notImplemented: (msg) => msg || "This feature is not yet implemented.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.badGateway(); // "Received an invalid response from the upstream server."
   *   MESSAGE.badGateway("Custom bad gateway message"); // "Custom bad gateway message"
   */
  badGateway: (msg) =>
    msg || "Received an invalid response from the upstream server.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.serviceUnavailable(); // "Service is temporarily unavailable. Please try again later."
   *   MESSAGE.serviceUnavailable("Custom service unavailable message"); // "Custom service unavailable message"
   */
  serviceUnavailable: (msg) =>
    msg || "Service is temporarily unavailable. Please try again later.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.gatewayTimeout(); // "The server took too long to respond. Please try again."
   *   MESSAGE.gatewayTimeout("Custom gateway timeout message"); // "Custom gateway timeout message"
   */
  gatewayTimeout: (msg) =>
    msg || "The server took too long to respond. Please try again.",
};

export const MESSAGE_CAPS = {
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.SUCCESS(); // "Request completed successfully."
   *   MESSAGE.SUCCESS("Custom success message"); // "Custom success message"
   */
  SUCCESS: (msg) => msg || "Request completed successfully.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.CREATED(); // "Resource created successfully."
   *   MESSAGE.CREATED("Custom created message"); // "Custom created message"
   */
  CREATED: (msg) => msg || "Resource created successfully.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.ACCEPTED(); // "Request accepted and is being processed."
   *   MESSAGE.ACCEPTED("Custom accepted message"); // "Custom accepted message"
   */
  ACCEPTED: (msg) => msg || "Request accepted and is being processed.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.NO_CONTENT(); // "No content to return."
   *   MESSAGE.NO_CONTENT("Custom no content message"); // "Custom no content message"
   */
  NO_CONTENT: (msg) => msg || "No content to return.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.MOVED_PERMANENTLY(); // "This resource has been moved permanently."
   *   MESSAGE.MOVED_PERMANENTLY("Custom moved permanently message"); // "Custom moved permanently message"
   */
  MOVED_PERMANENTLY: (msg) =>
    msg || "This resource has been moved permanently.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.FOUND(); // "Resource found at a different location."
   *   MESSAGE.FOUND("Custom found message"); // "Custom found message"
   */
  FOUND: (msg) => msg || "Resource found at a different location.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.NOT_MODIFIED(); // "Resource has not been modified."
   *   MESSAGE.NOT_MODIFIED("Custom not modified message"); // "Custom not modified message"
   */
  NOT_MODIFIED: (msg) => msg || "Resource has not been modified.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.BAD_REQUEST(); // "The request could not be understood. Please check your input."
   *   MESSAGE.BAD_REQUEST("Custom bad request message"); // "Custom bad request message"
   */

  BAD_REQUEST: (msg) =>
    msg || "The request could not be understood. Please check your input.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.UN_AUTHORIZED(); // "You are not authorized. Please login and try again."
   *   MESSAGE.UN_AUTHORIZED("Custom unauthorized message"); // "Custom unauthorized message"
   */
  UN_AUTHORIZED: (msg) =>
    msg || "You are not authorized. Please login and try again.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.FORBIDDEN(); // "You do not have permission to access this resource."
   *   MESSAGE.FORBIDDEN("Custom forbidden message"); // "Custom forbidden message"
   */
  FORBIDDEN: (msg) =>
    msg || "You do not have permission to access this resource.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.NOT_FOUND(); // "The requested resource was not found."
   *   MESSAGE.NOT_FOUND("Custom not found message"); // "Custom not found message"
   */
  NOT_FOUND: (msg) => msg || "The requested resource was not found.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.METHOD_NOT_ALLOWED(); // "This HTTP method is not allowed for this route."
   *   MESSAGE.METHOD_NOT_ALLOWED("Custom method not allowed message"); // "Custom method not allowed message"
   */
  METHOD_NOT_ALLOWED: (msg) =>
    msg || "This HTTP method is not allowed for this route.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.CONFLICT(); // "A conflict occurred. The resource may already exist."
   *   MESSAGE.CONFLICT("Custom conflict message"); // "Custom conflict message"
   */
  CONFLICT: (msg) =>
    msg || "A conflict occurred. The resource may already exist.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.GONE(); // "This resource has been permanently deleted."
   *   MESSAGE.GONE("Custom gone message"); // "Custom gone message"
   */
  GONE: (msg) => msg || "This resource has been permanently deleted.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.UN_PROCESSABLE_ENTRY(); // "Validation failed. Please check your input fields"
   *   MESSAGE.UN_PROCESSABLE_ENTRY("Custom unprocessable entry message"); // "Custom unprocessable entry message"
   */
  UN_PROCESSABLE_ENTRY: (msg) =>
    msg || "Validation failed. Please check your input fields",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.TOO_MANY_REQUESTS(); // "Too many requests. Please slow down and try again later."
   *   MESSAGE.TOO_MANY_REQUESTS("Custom too many requests message"); // "Custom too many requests message"
   */
  TOO_MANY_REQUESTS: (msg) =>
    msg || "Too many requests. Please slow down and try again later.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.SERVER_ERROR(); // "Something went wrong on our end. Please try again later."
   *   MESSAGE.SERVER_ERROR("Custom server error message"); // "Custom server error message"
   */
  SERVER_ERROR: (msg) =>
    msg || "Something went wrong on our end. Please try again later.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.NOT_IMPLEMENTED(); // "This feature is not yet implemented."
   *   MESSAGE.NOT_IMPLEMENTED("Custom not implemented message"); // "Custom not implemented message"
   */
  NOT_IMPLEMENTED: (msg) => msg || "This feature is not yet implemented.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.BAD_GATEWAY(); // "Received an invalid response from the upstream server."
   *   MESSAGE.BAD_GATEWAY("Custom bad gateway message"); // "Custom bad gateway message"
   */
  BAD_GATEWAY: (msg) =>
    msg || "Received an invalid response from the upstream server.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.SERVICE_UNAVAILABLE(); // "Service is temporarily unavailable. Please try again later."
   *   MESSAGE.SERVICE_UNAVAILABLE("Custom service unavailable message"); // "Custom service unavailable message"
   */
  SERVICE_UNAVAILABLE: (msg) =>
    msg || "Service is temporarily unavailable. Please try again later.",
  /**
   * @param {string} [msg] - Optional custom message to override the default.
   * @returns {string} - The default message for the status code, or the custom message if provided.
   * @example
   *   MESSAGE.GATEWAY_TIMEOUT(); // "The server took too long to respond. Please try again."
   *   MESSAGE.GATEWAY_TIMEOUT("Custom gateway timeout message"); // "Custom gateway timeout message"
   */
  GATEWAY_TIMEOUT: (msg) =>
    msg || "The server took too long to respond. Please try again.",
};
