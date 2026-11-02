# Task 6: Middleware

Time: about 25 minutes. Read first: `mern-examples/03-express/06-middleware.js`

## What to do

1. Add `cors()`, `express.json()` and `morgan("dev")` above the routes.
2. Write your own middleware that prints the time, method and URL of every request, then calls `next()`.
3. Write `checkKey`: if the request header `x-api-key` is not `secret123`, answer 401 `{ "message": "Missing key" }`, otherwise `next()`.
4. Use `checkKey` only on the POST route: `app.post("/api/jobs", checkKey, handler)`.
5. Test POST with and without the header in Postman.

## Expected result

POST without the header returns 401, with `x-api-key: secret123` returns 201. Every request is printed in the terminal.

## Hint

Request headers are in `req.headers["x-api-key"]` (lowercase).

## Done when

- [ ] Logger prints every request
- [ ] 401 and 201 both seen
- [ ] You can say what next() does
