// TOPIC: Params, query and body
// Data reaches your route in three places:
// req.params = part of the path        /api/jobs/7
// req.query  = after the ? mark        /api/jobs?status=offered
// req.body   = JSON sent by the client (needs express.json())
// RUN: node 05-params-query-body.js

import express from "express";
const app = express();
app.use(express.json());                     // lets us read req.body

// 1. params:  http://localhost:5000/api/jobs/7
app.get("/api/jobs/:id", (req, res) => {
  res.json({ idFromUrl: req.params.id });
});

// 2. query:   http://localhost:5000/api/search?status=offered&city=Delhi
app.get("/api/search", (req, res) => {
  res.json({ status: req.query.status, city: req.query.city });
});

// 3. body:    send a POST from Postman or curl (command below)
app.post("/api/jobs", (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(5000, () => console.log("Server on 5000"));

// curl -X POST localhost:5000/api/jobs -H "Content-Type: application/json" -d '{"company":"Acme"}'
