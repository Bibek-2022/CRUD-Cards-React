import mongoose from "mongoose";

export const connectMongoDB = () => {
  const connectStr = process.env.MONGODB_CLIENT;
  try {
    const connect = mongoose.connect(connectStr);
    connect && console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
