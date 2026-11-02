// TOPIC: Why Express
// A server waits for requests and sends back responses.
// Express is the standard Node framework for this.
// These 5 routes are the "contract" between React and the server (CRUD).
// This file only answers with text so you can see the idea. Real logic comes later.
// RUN: node 01-why-express.js   then open http://localhost:5000/api/jobs

import express from "express";
const app = express();

// Method + path decides which function runs
app.get("/api/jobs", (req, res) => res.send("GET    = READ: list all jobs"));
app.post("/api/jobs", (req, res) => res.send("POST   = CREATE: add a job"));
app.get("/api/jobs/:id", (req, res) => res.send("GET    = READ: one job"));
app.put("/api/jobs/:id", (req, res) => res.send("PUT    = UPDATE: change a job"));
app.delete("/api/jobs/:id", (req, res) => res.send("DELETE = DELETE: remove a job"));

app.listen(5000, () => console.log("Open http://localhost:5000/api/jobs"));
// The browser can only send GET. Test the others with Postman (see 08-testing).
