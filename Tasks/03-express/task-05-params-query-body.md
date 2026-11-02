# Task 5: Params, query and body

Time: about 25 minutes. Read first: `mern-examples/03-express/05-params-query-body.js`

## What to do

1. Add `app.use(express.json())` above your routes.
2. `GET /api/jobs/:id` returns the job with that id, or 404 `{ "message": "Not found" }`.
3. Make `GET /api/jobs?status=applied` filter jobs by status (add a `status` field to your jobs). With no `status` it returns all.
4. `POST /api/jobs` now returns whatever JSON body the client sent, inside `{ youSent: ... }`.
5. Test all three in the browser or Postman.

## Expected result

`/api/jobs/2` returns job 2. `/api/jobs/99` returns 404. `?status=applied` returns only applied jobs.

## Hint

URL values are text: use `Number(req.params.id)` before comparing with a number id.

## Done when

- [ ] Params, query and body each used once
- [ ] 404 works for a missing id
