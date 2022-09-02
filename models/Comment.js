import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    author: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
  }
);

export default mongoose.model("Comment", CommentSchema);
