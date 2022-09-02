import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
        type: String
    }
  },
);

export default mongoose.model("Certificate", CertificateSchema);