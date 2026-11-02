// app.js: builds the app (middleware + routes) but does not start it
import express from "express";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/jobs", jobRoutes);     // every URL starting with /api/jobs goes to the router

export default app;
