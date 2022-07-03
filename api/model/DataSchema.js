import mongoose from "mongoose";

const CardSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Card", CardSchema);
