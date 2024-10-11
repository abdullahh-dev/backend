import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB conected. DB HOST: ${db.connection.host}`);
  } catch (error) {
    console.log(`MONGODB connection failed`, error);
    process.exit(1);
  }
};

export default connectDB;
