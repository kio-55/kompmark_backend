import mongoose from "mongoose";

const HelpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Help", HelpSchema);