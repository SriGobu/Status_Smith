import { describe, it, expect, vi, beforeEach } from "vitest";
import { sendResponse } from "./sendResponse.js";

function mockRes() {
  const json = vi.fn();
  const status = vi.fn().mockReturnValue({ json });
  return { status, json };
}

describe("sendResponse", () => {
  let res;

  beforeEach(() => {
    res = mockRes();
  });

  it("should send a 200 success response", () => {
    sendResponse(res, 200, "OK");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "OK",
    });
  });

  it("should send a 201 created response", () => {
    sendResponse(res, 201, "Created");
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "Created",
    });
  });

  it("should send a 404 error response", () => {
    sendResponse(res, 404, "Not found");
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Not found",
    });
  });

  it("should send a 500 error response", () => {
    sendResponse(res, 500, "Server error");
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Server error",
    });
  });

  it("should include data when provided", () => {
    const data = { id: 1, name: "John" };
    sendResponse(res, 200, "OK", data);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "OK",
      data,
    });
  });

  it("should include meta when provided", () => {
    const meta = { page: 1, total: 100 };
    sendResponse(res, 200, "OK", undefined, meta);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "OK",
      meta,
    });
  });

  it("should include both data and meta when provided", () => {
    const data = [{ id: 1 }];
    const meta = { page: 1, total: 1 };
    sendResponse(res, 200, "OK", data, meta);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "OK",
      data,
      meta,
    });
  });

  it("should fallback to 500 for invalid status code", () => {
    sendResponse(res, 9999, "bad");
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Invalid status code provided.",
      }),
    );
  });

  it("should not include data key if data is null", () => {
    sendResponse(res, 200, "OK", null);
    const call = res.json.mock.calls[0][0];
    expect(call).not.toHaveProperty("data");
  });

  it("should not include meta key if meta is empty", () => {
    sendResponse(res, 200, "OK", undefined, {});
    const call = res.json.mock.calls[0][0];
    expect(call).not.toHaveProperty("meta");
  });

  it("3xx should have success: false", () => {
    sendResponse(res, 301, "Moved");
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ success: false }),
    );
  });
});
