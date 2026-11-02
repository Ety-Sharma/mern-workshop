// Job.js: the schema (shape + rules) and the model (tool to query the collection)
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },            // must be sent
    ctc: { type: Number, min: 0 },                        // number, not negative
    status: {
      type: String,
      enum: ["applied", "interview", "offered", "rejected"],
      default: "applied",
    },
  },
  { timestamps: true }                                    // adds createdAt and updatedAt
);

// "Job" -> MongoDB collection named "jobs"
export default mongoose.model("Job", jobSchema);
