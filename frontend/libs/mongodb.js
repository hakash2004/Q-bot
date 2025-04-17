import { log } from "console";
import mongoose from "mongoose";
const uri = "mongodb+srv://hakash:3iWCBN4YlpNPCwW7@cluster0.gi5oz.mongodb.net/lms_db?retryWrites=true&w=majority"
const connectMongoDb = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log("Connected to the database");
  } catch (error) {
    log("Failed to connect to the database");
    log("Error details:", error.message);
  }
};

export default connectMongoDb;
