import { describe, it, expect } from "vitest";
import { STATUS, STATUS_CAPS } from "./status.js";

describe("STATUS", () => {
  it("should have correct 2xx status codes", () => {
    expect(STATUS.success).toBe(200);
    expect(STATUS.created).toBe(201);
    expect(STATUS.accepted).toBe(202);
    expect(STATUS.noContent).toBe(204);
  });
  it("should have correct 3xx status codes", () => {
    expect(STATUS.movedPermanently).toBe(301);
    expect(STATUS.found).toBe(302);
    expect(STATUS.notModified).toBe(304);
  });
  it("should have correct 4xx status codes", () => {
    expect(STATUS.badRequest).toBe(400);
    expect(STATUS.unauthorized).toBe(401);
    expect(STATUS.forbidden).toBe(403);
    expect(STATUS.notFound).toBe(404);
    expect(STATUS.methodNotAllowed).toBe(405);
    expect(STATUS.conflict).toBe(409);
    expect(STATUS.gone).toBe(410);
    expect(STATUS.unprocessableEntity).toBe(422);
    expect(STATUS.tooManyRequests).toBe(429);
  });
  it("should have correct 5xx status codes", () => {
    expect(STATUS.serverError).toBe(500);
    expect(STATUS.notImplemented).toBe(501);
    expect(STATUS.badGateway).toBe(502);
    expect(STATUS.serviceUnavailable).toBe(503);
    expect(STATUS.gatewayTimeout).toBe(504);
  });
  it("STATUS should be frozen", () => {
    expect(Object.isFrozen(STATUS)).toBe(true);
  });
});

describe("STATUS_CAPS", () => {
  it("should have correct 2xx status codes", () => {
    expect(STATUS_CAPS.SUCCESS).toBe(200);
    expect(STATUS_CAPS.CREATED).toBe(201);
    expect(STATUS_CAPS.ACCEPTED).toBe(202);
    expect(STATUS_CAPS.NO_CONTENT).toBe(204);
  });
  it("should have correct 3xx status codes", () => {
    expect(STATUS_CAPS.MOVED_PERMANENTLY).toBe(301);
    expect(STATUS_CAPS.FOUND).toBe(302);
    expect(STATUS_CAPS.NOT_MODIFIED).toBe(304);
  });
  it("should have correct 4xx status codes", () => {
    expect(STATUS_CAPS.BAD_REQUEST).toBe(400);
    expect(STATUS_CAPS.UN_AUTHORIZED).toBe(401);
    expect(STATUS_CAPS.FORBIDDEN).toBe(403);
    expect(STATUS_CAPS.NOT_FOUND).toBe(404);
    expect(STATUS_CAPS.METHOD_NOT_ALLOWED).toBe(405);
    expect(STATUS_CAPS.CONFLICT).toBe(409);
    expect(STATUS_CAPS.GONE).toBe(410);
    expect(STATUS_CAPS.UN_PROCESSABLE_ENTITY).toBe(422);
    expect(STATUS_CAPS.TOO_MANY_REQUESTS).toBe(429);
  });
  it("should have correct 5xx status codes", () => {
    expect(STATUS_CAPS.SERVER_ERROR).toBe(500);
    expect(STATUS_CAPS.NOT_IMPLEMENTED).toBe(501);
    expect(STATUS_CAPS.BAD_GATEWAY).toBe(502);
    expect(STATUS_CAPS.SERVICE_UNAVAILABLE).toBe(503);
    expect(STATUS_CAPS.GATEWAY_TIMEOUT).toBe(504);
  });
  it("STATUS_CAPS should be frozen", () => {
    expect(Object.isFrozen(STATUS_CAPS)).toBe(true);
  });
});
