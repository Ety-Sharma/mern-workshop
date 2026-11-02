// TOPIC: CRUD with an array: create and read
// We keep jobs in a plain array first, to focus on the logic.
// GET returns the array. POST adds a job and returns it with status 201.
// Restart the server and the data disappears. That is why we need a database later.
// RUN: node 09-crud-array-create-read.js   then test with ../08-testing-with-postman/requests.http

import express from "express";
const app = express();
app.use(express.json());

let jobs = [{ id: 1, company: "Acme", ctc: 6 }];

// READ: list all
app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

// CREATE: add one
app.post("/api/jobs", (req, res) => {
  const job = { id: Date.now(), ...req.body };   // Date.now() = quick temporary id
  jobs.push(job);
  res.status(201).json(job);
});

app.listen(5000, () => console.log("http://localhost:5000/api/jobs"));
