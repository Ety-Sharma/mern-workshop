// db.js: connects to MongoDB once, shared by every example
import "dotenv/config";
import mongoose from "mongoose";

export default async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
}
