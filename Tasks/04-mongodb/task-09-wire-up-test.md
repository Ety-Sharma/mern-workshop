# Task 9: Wire up and test

Time: about 30 minutes. Read first: `mern-examples/04-mongodb/09-wire-up-and-test/`

## What to do

1. Make sure `jobRoutes.js` has `router.route("/").get(getJobs).post(addJob)` and `router.route("/:id").get(getJob).put(updateJob).delete(deleteJob)`.
2. Run your whole Postman collection in order: create, list, read one, update, delete.
3. Restart the server and list again: the data is still there.
4. Commit your work: `git commit -m "jobs API with MongoDB"`.

## Expected result

All five requests work and data survives a restart. Your backend is complete.

## Hint

If something fails, read the terminal error first, then check the id in the URL.

## Done when

- [ ] All five routes work with MongoDB
- [ ] Data survives a restart
- [ ] Committed to git
