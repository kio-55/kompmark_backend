import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  payment: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Job", JobSchema);
