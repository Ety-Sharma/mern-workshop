import express from "express";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();
app.use(express.json());

// Mount the router: "/" inside the router means "/api/jobs" here
app.use("/api/jobs", jobRoutes);

app.listen(5000, () => console.log("http://localhost:5000/api/jobs"));
