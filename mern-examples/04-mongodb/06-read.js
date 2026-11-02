// TOPIC: Read
// Job.find() returns every document. Job.findById() returns one, or null.
// null means the item does not exist, so we answer 404.
// RUN: node 06-read.js

import express from "express";
import connectDB from "./db.js";
import Job from "./Job.js";
import errorHandler from "./errorHandler.js";

const app = express();
app.use(express.json());

// Seed route so you have something to read (POST it once)
app.post("/api/jobs", async (req, res) => {
  const { company, ctc, status } = req.body;
  res.status(201).json(await Job.create({ company, ctc, status }));
});

app.get("/api/jobs", async (req, res) => {
  const jobs = await Job.find();                   // all jobs
  res.json(jobs);
});

app.get("/api/jobs/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);   // one job, or null
  if (!job) return res.status(404).json({ message: "Not found" });
  res.json(job);
});

app.use(errorHandler);

await connectDB();
app.listen(5000, () => console.log("GET http://localhost:5000/api/jobs"));
// Copy an _id from the list and open /api/jobs/<that id>. Then try /api/jobs/abc (400).
