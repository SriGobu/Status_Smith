# StatUx

> Zero-dependency HTTP status codes, dynamic messages and response handler for Node.js backends.

Stop memorizing status codes. Stop rewriting the same messages. StatUx gives you a clean, consistent layer for every API response.

---

## Installation

### Windows

npm install -g statux

### Mac / Linux

sudo npm install -g statux

### Or fix permissions permanently

mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
npm install -g statux

---

## Import

```js
import {
  STATUS,
  STATUS_CAPS,
  MESSAGE,
  MESSAGE_CAPS,
  sendResponse,
} from "statux";
```

---

## Status Codes

### camelCase

```js
STATUS.success; // 200
STATUS.created; // 201
STATUS.accepted; // 202
STATUS.noContent; // 204
STATUS.badRequest; // 400
STATUS.unauthorized; // 401
STATUS.forbidden; // 403
STATUS.notFound; // 404
STATUS.conflict; // 409
STATUS.unprocessableEntity; // 422
STATUS.tooManyRequests; // 429
STATUS.serverError; // 500
STATUS.serviceUnavailable; // 503
```

### SCREAMING_SNAKE_CASE

```js
STATUS_CAPS.SUCCESS;
STATUS_CAPS.NOT_FOUND;
STATUS_CAPS.SERVER_ERROR;
// same values, different naming style
```

---

## Messages

Messages are **dynamic functions**. Pass a custom message or use the built-in default.

```js
// default
MESSAGE.success(); // "Request completed successfully."
MESSAGE.notFound(); // "The requested resource was not found."
MESSAGE.unauthorized(); // "You are not authorized. Please login and try again."
MESSAGE.serverError(); // "Something went wrong on our end. Please try again later."

// custom
MESSAGE.success("User registered successfully");
MESSAGE.notFound("Product not found");
MESSAGE.conflict("Email already exists");
```

Same pattern for `MESSAGE_CAPS`:

```js
MESSAGE_CAPS.SUCCESS("User registered successfully");
MESSAGE_CAPS.NOT_FOUND();
```

---

## sendResponse

A clean response utility. Builds a structured JSON response and sends it.

```js
sendResponse(res, statusCode, message, data, meta);
```

| Parameter    | Type   | Required | Description                           |
| ------------ | ------ | -------- | ------------------------------------- |
| `res`        | Object | ✅       | Express response object               |
| `statusCode` | Number | ✅       | HTTP status code                      |
| `message`    | String | ✅       | Response message                      |
| `data`       | Any    | ❌       | Response payload — skipped if null    |
| `meta`       | Object | ❌       | Extra info — pagination, token, count |

### Response shape

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User registered successfully",
  "data": {},
  "meta": {}
}
```

`data` and `meta` only appear when provided.

---

## Examples

### Basic

```js
// success with data
sendResponse(res, STATUS.success, MESSAGE.success("User fetched"), user);

// error without data
sendResponse(res, STATUS.notFound, MESSAGE.notFound("User"));
```

### With meta — pagination

```js
sendResponse(res, STATUS.success, MESSAGE.success(), users, {
  page: 1,
  limit: 10,
  total: 100,
});
```

### Real world routes

```js
import { STATUS, MESSAGE, sendResponse } from "statux";

// GET user
app.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return sendResponse(res, STATUS.notFound, MESSAGE.notFound("User"));
  }

  sendResponse(
    res,
    STATUS.success,
    MESSAGE.success("User fetched successfully"),
    user,
  );
});

// POST register
app.post("/register", async (req, res) => {
  const existing = await User.findOne({ email: req.body.email });

  if (existing) {
    return sendResponse(
      res,
      STATUS.conflict,
      MESSAGE.conflict("Email already exists"),
    );
  }

  const user = await User.create(req.body);
  sendResponse(
    res,
    STATUS.created,
    MESSAGE.created("User registered successfully"),
    user,
  );
});

// DELETE
app.delete("/user/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  sendResponse(res, STATUS.noContent, MESSAGE.noContent());
});
```

---

## Why StatUx

| Without StatUx                                        | With StatUx                                                    |
| ----------------------------------------------------- | -------------------------------------------------------------- |
| `res.status(404).json({ message: "User not found" })` | `sendResponse(res, STATUS.notFound, MESSAGE.notFound("User"))` |
| Hardcoded numbers everywhere                          | Semantic, readable constants                                   |
| Inconsistent messages across routes                   | One source of truth                                            |
| Different response shapes per developer               | Unified structure                                              |

---

## License

MIT © StatUx
