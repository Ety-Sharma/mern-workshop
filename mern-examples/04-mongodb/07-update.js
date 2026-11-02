// TOPIC: Update
// findByIdAndUpdate finds and changes in one call.
// { new: true } returns the UPDATED document (without it you get the old one).
// { runValidators: true } applies the schema rules to updates (off by default!).
// RUN: node 07-update.js

import express from "express";
import connectDB from "./db.js";
import Job from "./Job.js";
import errorHandler from "./errorHandler.js";

const app = express();
app.use(express.json());

app.post("/api/jobs", async (req, res) => {
  const { company, ctc, status } = req.body;
  res.status(201).json(await Job.create({ company, ctc, status }));
});

app.put("/api/jobs/:id", async (req, res) => {
  const job = await Job.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!job) return res.status(404).json({ message: "Not found" });
  res.json(job);
});

app.use(errorHandler);

await connectDB();
app.listen(5000, () => console.log("PUT http://localhost:5000/api/jobs/:id"));
// Try PUT with { "ctc": -5 } and then remove runValidators to see the difference.
