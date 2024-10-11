import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
const PORT = process.env.PORT || 8000;

dotenv.config({ path: "./.env" });

connectDB()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is reuning on PORT : ${PORT}`);
    })
  )
  .catch((err) => console.error(err));
