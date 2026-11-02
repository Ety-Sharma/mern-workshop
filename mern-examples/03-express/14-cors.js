// TOPIC: CORS
// Browsers block a web page on one origin (like localhost:5173) from calling an API on
// another origin (localhost:5000), unless the server allows it.
// The cors package adds the allow headers. Postman ignores this rule, the browser does not.
// RUN: node 14-cors.js   then run the page in 14-cors-test.html (see steps below)

import express from "express";
import cors from "cors";

const app = express();

// 1. Run once WITHOUT the next line, open 14-cors-test.html, press F12: red CORS error.
// 2. Then add the line back, restart, refresh: it works.
app.use(cors());

// In production allow only your own frontend:
// app.use(cors({ origin: "https://your-app.vercel.app" }));

app.get("/api/jobs", (req, res) => res.json([{ company: "Acme" }]));

app.listen(5000, () => console.log("http://localhost:5000/api/jobs"));
