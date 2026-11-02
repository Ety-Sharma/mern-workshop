# Routers and controllers

- A controller is a function that handles one route.
- Router() groups the routes of ONE resource (here: jobs).
- app.use("/api/jobs", router) mounts the router under a prefix, so
  router.get("/") answers GET /api/jobs and router.get("/:id") answers GET /api/jobs/5.

Run: `node server.js` and test with ../08-testing-with-postman/requests.http
