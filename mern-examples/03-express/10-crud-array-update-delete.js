// TOPIC: CRUD with an array: update and delete
// Find the job by id. If it is missing, answer 404.
// PUT merges the new fields into the job. DELETE removes it and answers 204 (no body).
// Pattern for both: find, check, change, respond.
// RUN: node 10-crud-array-update-delete.js

import express from "express";
const app = express();
app.use(express.json());

let jobs = [
  { id: 1, company: "Acme", ctc: 6 },
  { id: 2, company: "Globex", ctc: 9 },
];

app.get("/api/jobs", (req, res) => res.json(jobs));

// UPDATE
app.put("/api/jobs/:id", (req, res) => {
  const id = Number(req.params.id);                  // URL values are text, make it a number
  const i = jobs.findIndex((j) => j.id === id);      // find
  if (i === -1) return res.status(404).json({ message: "Not found" });   // check
  jobs[i] = { ...jobs[i], ...req.body };             // change
  res.json(jobs[i]);                                 // respond
});

// DELETE
app.delete("/api/jobs/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = jobs.some((j) => j.id === id);
  if (!exists) return res.status(404).json({ message: "Not found" });
  jobs = jobs.filter((j) => j.id !== id);
  res.status(204).end();                             // 204 = done, nothing to send back
});

app.listen(5000, () => console.log("http://localhost:5000/api/jobs"));
