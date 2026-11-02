# Task 7: How a request travels

Time: about 15 minutes. Read first: `mern-examples/03-express/07-how-a-request-travels.js`

## What to do

1. Create `order.js` (a small separate server) with 2 middleware functions and 1 route, each printing a number (1, 2, 3).
2. Add a `/broken` route that throws an Error and an error handler that prints `4`.
3. In `notes.txt` write what order you expect for `/ok` and for `/broken` BEFORE you test.
4. Run and compare. Fix your notes if you were wrong.

## Expected result

`/ok` prints 1, 2, 3. `/broken` prints 1, 2, 3, 4.

## Hint

The error handler has FOUR parameters `(err, req, res, next)` and goes last.

## Done when

- [ ] Prediction written before testing
- [ ] You can explain the order out loud
