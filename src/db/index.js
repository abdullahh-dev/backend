import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  console.log(`\n MongoDB conected. DB HOST: ${db.connection.host}`);
};

export default connectDB;
