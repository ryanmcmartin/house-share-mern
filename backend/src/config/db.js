import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_DB_URI);
    console.log("Connected to DB Successfully");
  } catch (error) {
    console.log(error, "Error connecting to MongoDB");
    process.exit(1);
  }
};
