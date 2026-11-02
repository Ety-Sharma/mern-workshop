# Task 10: CRUD with an array: update and delete

Time: about 30 minutes. Read first: `mern-examples/03-express/10-crud-array-update-delete.js`

## What to do

1. `PUT /api/jobs/:id` finds the job, answers 404 if missing, otherwise merges `req.body` into it and returns it.
2. `DELETE /api/jobs/:id` removes it and answers 204 (no body), or 404 if missing.
3. Test in Postman: update the ctc of a job, delete a job, delete the same id again.
4. Write in `notes.txt` the 4-word pattern both routes follow.

## Expected result

Second delete of the same id returns 404. Your notes say: find, check, change, respond.

## Hint

Use `findIndex` for update and `filter` for delete.

## Done when

- [ ] Update returns the updated job
- [ ] Delete returns 204 then 404
- [ ] All five routes work
