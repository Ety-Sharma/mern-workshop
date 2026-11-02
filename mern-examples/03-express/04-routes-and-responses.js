// TOPIC: Routes and responses
// res.json(...) sends JSON. res.status(...) sets the status code.
// 2xx = success, 4xx = the client made a mistake, 5xx = the server failed.
// Common: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error.
// RUN: node 04-routes-and-responses.js   then open the URLs in the comments

import express from "express";
const app = express();

const jobs = [{ id: 1, company: "Acme" }, { id: 2, company: "Globex" }];

// http://localhost:5000/api/jobs  -> JSON list, status 200 (default)
app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

// http://localhost:5000/api/created -> status 201 + JSON
app.get("/api/created", (req, res) => {
  res.status(201).json({ message: "Pretend we created something" });
});

// http://localhost:5000/api/missing -> status 404 + JSON message
app.get("/api/missing", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(5000, () => console.log("http://localhost:5000/api/jobs"));
// In the browser press F12 -> Network tab to see the status code of each request.
