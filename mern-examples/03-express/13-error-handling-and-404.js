// TOPIC: Error handling and 404
// A catch-all after the routes answers unknown URLs with 404.
// Error middleware has FOUR parameters (err, req, res, next) and goes LAST.
// Express 5 sends errors from async handlers here automatically (on Express 4 use try/catch + next(err)).
// RUN: node 13-error-handling-and-404.js   try /boom and /nothing-here

import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Home. Try /boom and /nothing-here"));

app.get("/boom", async (req, res) => {
  throw new Error("Something went wrong inside the route");
});

// 404: runs only if no route above matched
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// Error handler: exactly 4 parameters, so Express knows it is the error handler
app.use((err, req, res, next) => {
  console.error("Error caught:", err.message);
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(5000, () => console.log("http://localhost:5000"));
