// TOPIC: Create
// Job.create validates and saves, then returns the saved document with its _id.
// Pick the fields you accept instead of passing req.body whole (stops "mass assignment").
// RUN: node 05-create.js   then POST from Postman

import express from "express";
import connectDB from "./db.js";
import Job from "./Job.js";
import errorHandler from "./errorHandler.js";

const app = express();
app.use(express.json());

app.post("/api/jobs", async (req, res) => {
  const { company, ctc, status } = req.body;       // only the fields we allow
  const job = await Job.create({ company, ctc, status });
  res.status(201).json(job);
});

app.use(errorHandler);

await connectDB();
app.listen(5000, () => console.log("POST http://localhost:5000/api/jobs"));
// Then open Atlas -> Browse Collections and find your job.
// Try posting without "company" and read the 400 message.
