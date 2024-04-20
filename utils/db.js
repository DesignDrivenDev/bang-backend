import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURI = process.env.MONGO_URI ?? "";

export async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected To Database!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
