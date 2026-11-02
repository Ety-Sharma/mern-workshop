# Task 9: Add, update and delete

Time: about 45 minutes. Read first: `mern-examples/05-react/src/examples/Ex09_Crud.jsx`

## What to do

1. Connect `JobForm` to `POST /api/jobs`. After success add the returned job to the top of the list (new array).
2. Add a `Delete` button on each job that calls `DELETE /api/jobs/:id` and then removes it from state.
3. Add a button that changes a job's status to `interview` with `PUT` and replaces it in state with `map`.
4. Check `res.ok` before changing state. Refresh the page: everything must still be there (it is in MongoDB).

## Expected result

Add, change and delete from the page, and the data survives a refresh.

## Hint

Server first, then state. Use `prev.filter(j => j._id !== id)` for delete.

## Done when

- [ ] Create, update, delete all work
- [ ] State changes only after the server answers
