import express from "express";
import mongoose from "mongoose";
import jobRoutes from "./jobRoutes.js";
import errorHandler from "../errorHandler.js";

const app = express();
app.use(express.json());
app.use("/api/jobs", jobRoutes);
app.use(errorHandler);

await mongoose.connect(process.env.MONGO_URI);
console.log("MongoDB connected");
app.listen(5000, () => console.log("http://localhost:5000/api/jobs"));
