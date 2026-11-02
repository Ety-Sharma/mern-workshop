# Task 13: Error handling and 404

Time: about 20 minutes. Read first: `mern-examples/03-express/13-error-handling-and-404.js`

## What to do

1. At the end of `app.js` add the 404 catch-all returning JSON.
2. After it add the error handler `(err, req, res, next)` returning `err.status || 500` and `{ message }`.
3. Add a temporary route `GET /api/crash` that throws `new Error("test crash")`.
4. Call it in Postman and read the JSON you get. Then remove the crash route.

## Expected result

`/api/crash` returns status 500 with `{ "message": "test crash" }`. An unknown URL returns 404 JSON.

## Hint

The error handler must have exactly four parameters and come after all routes.

## Done when

- [ ] 404 JSON works
- [ ] 500 JSON works
- [ ] You can say how Express knows it is an error handler
