import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

  console.log(process.env); // Use environment variable or fallback to default
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, { // Use the MONGO_URI variable
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  }
};

export default connectDB;
