import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      maxlength: 50,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 50,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Card", DataSchema);
