// TOPIC: Your first server
// express() creates the app.
// app.get(path, handler) answers GET requests to that path.
// app.listen(port) starts the server.
// RUN: node 03-first-server.js   then open http://localhost:5000

import express from "express";

const app = express();                       // 1. create the app

app.get("/", (req, res) => {                 // 2. when someone visits "/"
  res.send("API is running");                //    send this text back
});

app.listen(5000, () => {                     // 3. start listening on port 5000
  console.log("Server on port 5000");
});
// Stop the server with Ctrl + C.
