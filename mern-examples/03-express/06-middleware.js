// TOPIC: Middleware
// Middleware is a function (req, res, next) that runs BEFORE your route.
// Call next() to continue to the next function. Send a response to stop.
// Order matters: put middleware above the routes.
// RUN: node 06-middleware.js   then open http://localhost:5000/hello and watch the terminal

import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// Our own middleware: prints every request, then lets it continue
app.use((req, res, next) => {
  console.log("Middleware says:", req.method, req.url);
  next();                                    // remove this line and the page will hang
});

app.use(cors());                             // lets React (another port) call this API
app.use(express.json());                     // fills req.body
app.use(morgan("dev"));                      // ready-made logger

app.get("/hello", (req, res) => {
  res.send("Hello after passing all middleware");
});

app.listen(5000, () => console.log("http://localhost:5000/hello"));
