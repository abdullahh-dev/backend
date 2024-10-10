import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
const app = express();

dotenv.config({ path: "./.env" });
connectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.listen.on("error", () => {
//       console.log(error);
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// })();
