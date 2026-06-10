import { describe, it, expect } from "vitest";
import { MESSAGE, MESSAGE_CAPS } from "./message.js";

describe("MESSAGE", () => {
  it("should return default 2xx messages", () => {
    expect(MESSAGE.success()).toBe("Request completed successfully.");
    expect(MESSAGE.created()).toBe("Resource created successfully.");
    expect(MESSAGE.accepted()).toBe("Request accepted and is being processed.");
    expect(MESSAGE.noContent()).toBe("No content to return.");
  });
  it("should return default 3xx messages", () => {
    expect(MESSAGE.movedPermanently()).toBe(
      "This resource has been moved permanently.",
    );
    expect(MESSAGE.found()).toBe("Resource found at a different location.");
    expect(MESSAGE.notModified()).toBe("Resource has not been modified.");
  });
  it("should return default 4xx messages", () => {
    expect(MESSAGE.badRequest()).toBe(
      "The request could not be understood. Please check your input.",
    );
    expect(MESSAGE.unauthorized()).toBe(
      "You are not authorized. Please login and try again.",
    );
    expect(MESSAGE.forbidden()).toBe(
      "You do not have permission to access this resource.",
    );
    expect(MESSAGE.notFound()).toBe("The requested resource was not found.");
    expect(MESSAGE.methodNotAllowed()).toBe(
      "This HTTP method is not allowed for this route.",
    );
    expect(MESSAGE.conflict()).toBe(
      "A conflict occurred. The resource may already exist.",
    );
    expect(MESSAGE.gone()).toBe("This resource has been permanently deleted.");
    expect(MESSAGE.unprocessableEntity()).toBe(
      "Validation failed. Please check your input fields",
    );
    expect(MESSAGE.tooManyRequests()).toBe(
      "Too many requests. Please slow down and try again later.",
    );
  });
});

describe("MESSAGE_CAPS", () => {
  it("should return default 2xx messages", () => {
    expect(MESSAGE_CAPS.SUCCESS()).toBe("Request completed successfully.");
    expect(MESSAGE_CAPS.CREATED()).toBe("Resource created successfully.");
    expect(MESSAGE_CAPS.ACCEPTED()).toBe(
      "Request accepted and is being processed.",
    );
    expect(MESSAGE_CAPS.NO_CONTENT()).toBe("No content to return.");
  });
  it("should return default 3xx messages", () => {
    expect(MESSAGE_CAPS.MOVED_PERMANENTLY()).toBe(
      "This resource has been moved permanently.",
    );
    expect(MESSAGE_CAPS.FOUND()).toBe(
      "Resource found at a different location.",
    );
    expect(MESSAGE_CAPS.NOT_MODIFIED()).toBe("Resource has not been modified.");
  });
  it("should return default 4xx messages", () => {
    expect(MESSAGE_CAPS.BAD_REQUEST()).toBe(
      "The request could not be understood. Please check your input.",
    );
    expect(MESSAGE_CAPS.UN_AUTHORIZED()).toBe(
      "You are not authorized. Please login and try again.",
    );
    expect(MESSAGE_CAPS.FORBIDDEN()).toBe(
      "You do not have permission to access this resource.",
    );
    expect(MESSAGE_CAPS.NOT_FOUND()).toBe(
      "The requested resource was not found.",
    );
    expect(MESSAGE_CAPS.METHOD_NOT_ALLOWED()).toBe(
      "This HTTP method is not allowed for this route.",
    );
    expect(MESSAGE_CAPS.CONFLICT()).toBe(
      "A conflict occurred. The resource may already exist.",
    );
    expect(MESSAGE_CAPS.GONE()).toBe(
      "This resource has been permanently deleted.",
    );
    expect(MESSAGE_CAPS.UN_PROCESSABLE_ENTITY()).toBe(
      "Validation failed. Please check your input fields",
    );
    expect(MESSAGE_CAPS.TOO_MANY_REQUESTS()).toBe(
      "Too many requests. Please slow down and try again later.",
    );
  });
});
