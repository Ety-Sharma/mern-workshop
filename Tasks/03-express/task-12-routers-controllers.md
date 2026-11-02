# Task 12: Routers and controllers

Time: about 30 minutes. Read first: `mern-examples/03-express/12-routers-and-controllers/`

## What to do

1. Create `src/controllers/jobController.js` with `getJobs`, `getJob`, `addJob`, `updateJob`, `deleteJob` (move your logic there).
2. Create `src/routes/jobRoutes.js` with a `Router()` and `router.route("/")` and `router.route("/:id")` chains.
3. In `app.js` mount it with `app.use("/api/jobs", jobRoutes)`.
4. Run your Postman collection again: it must behave exactly as before.

## Expected result

No URL changed, but the code is split into route and controller files.

## Hint

In the router, paths are relative: `"/"` here means `/api/jobs`.

## Done when

- [ ] All five routes work
- [ ] No logic left inside the route file
