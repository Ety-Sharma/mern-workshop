# Task 9: CRUD with an array: create and read

Time: about 25 minutes. Read first: `mern-examples/03-express/09-crud-array-create-read.js`

## What to do

1. In your `server.js` keep jobs in `let jobs = [...]`.
2. `GET /api/jobs` returns all jobs.
3. `POST /api/jobs` creates a job with `id: Date.now()` and the fields from `req.body`, pushes it, returns it with status 201.
4. Validation: if `company` is missing, return 400 `{ "message": "company is required" }`.
5. Create 2 jobs in Postman, list them, then restart the server and list again.

## Expected result

After a restart the new jobs are gone (this is normal, we fix it with MongoDB).

## Hint

Check `if (!req.body.company)` before creating.

## Done when

- [ ] 201 on create
- [ ] 400 for a missing company
- [ ] You can say why the data disappears
