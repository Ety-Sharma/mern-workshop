# Project structure

```
11-project-structure/
  server.js                    starts the server (only this)
  src/
    app.js                     builds the app: middleware + routes
    routes/jobRoutes.js        URL -> controller
    controllers/jobController.js   the logic
```

One file, one job. Run it with `node server.js` and open http://localhost:5000/api/jobs.
In the next topic (12) we look at the router and controller closely.
