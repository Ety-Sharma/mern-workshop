// TOPIC: Environment variables
// Secrets and settings (port, database URL, passwords) go in a .env file, never in code.
// dotenv loads .env into process.env. Values are always strings.
// SETUP: copy .env.example to .env, then run npm install once in the examples folder.
// RUN: node env-demo.js

import "dotenv/config";

console.log("PORT is", process.env.PORT);
console.log("APP_NAME is", process.env.APP_NAME);

// The second value is a fallback when the variable is missing
const port = process.env.PORT || 3000;
console.log("Using port", port, typeof port);   // note: it is a string
