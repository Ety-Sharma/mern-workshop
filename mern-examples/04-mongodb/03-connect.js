// TOPIC: Connect with Mongoose
// Mongoose maps JavaScript objects to MongoDB documents.
// We connect first, and only then start the server.
// If this prints "MongoDB connected" your Atlas setup is correct.
// RUN: node 03-connect.js

import express from "express";
import connectDB from "./db.js";

const app = express();
app.get("/", (req, res) => res.send("API + database are up"));

await connectDB();                              // wait for the database...
app.listen(process.env.PORT || 5000, () => {    // ...then start the server
  console.log("Server running on port", process.env.PORT || 5000);
});
// Break the password in .env on purpose and read the error message.
