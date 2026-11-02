// TOPIC: Delete
// findByIdAndDelete removes the document. Answer 204 (nothing to send back), or 404 if nothing matched.
// Soft delete (a flag like isDeleted) keeps the data so it can be restored.
// RUN: node 08-delete.js

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

app.delete("/api/jobs/:id", async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) return res.status(404).json({ message: "Not found" });
  res.status(204).end();
});

app.use(errorHandler);

await connectDB();
app.listen(5000, () => console.log("DELETE http://localhost:5000/api/jobs/:id"));
// Delete a job, then delete the same id again: the second call answers 404.
