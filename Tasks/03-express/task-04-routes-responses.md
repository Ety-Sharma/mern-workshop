# Task 4: Routes and responses

Time: about 20 minutes. Read first: `mern-examples/03-express/04-routes-and-responses.js`

## What to do

1. In `server.js` add an array `jobs` with 3 jobs (id, company, ctc).
2. `GET /api/jobs` returns the array (200).
3. `POST /api/jobs` returns `{ "message": "created" }` with status 201 (no saving yet).
4. `GET /api/jobs/unknown-page` should not exist: add a catch-all so any unknown URL returns 404 with `{ "message": "Not found" }`. (Put it LAST.)
5. Open DevTools, Network tab, and note the status code of each request.

## Expected result

`/api/jobs` shows 200, an unknown URL shows 404 with your JSON message.

## Hint

`res.status(404).json(...)`. The catch-all uses `app.use((req, res) => ...)` after all routes.

## Done when

- [ ] Three status codes seen: 200, 201, 404
- [ ] You can say what 4xx means
