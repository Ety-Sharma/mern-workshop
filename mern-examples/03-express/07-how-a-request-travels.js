// TOPIC: How a request travels
// Every request passes the same middleware in order, then reaches one route.
// If something throws an error, Express skips to the error handler at the end.
// Run this and open the URLs: the terminal numbers show the exact order.
// RUN: node 07-how-a-request-travels.js

import express from "express";
const app = express();

app.use((req, res, next) => { console.log("1. first middleware"); next(); });
app.use((req, res, next) => { console.log("2. second middleware"); next(); });

app.get("/ok", (req, res) => {
  console.log("3. route runs");
  res.send("Response sent. Check the terminal order.");
});

app.get("/broken", (req, res) => {
  console.log("3. route runs and throws");
  throw new Error("Something broke");
});

// Error handler: 4 parameters, goes LAST
app.use((err, req, res, next) => {
  console.log("4. error handler:", err.message);
  res.status(500).json({ message: err.message });
});

app.listen(5000, () => console.log("Try /ok and /broken"));
