import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    imageUrl: {
        type: String
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", PostSchema);
