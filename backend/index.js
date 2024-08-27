import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express()

app.get("/", (_, res) => {
  return res.status(200).json({
    message: "coming from the backend",
    success: true
  })
})

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
}
app.use(cors(corsOptions));

app.listen(PORT, () => {
  connectDB();
  console.log(`server listening on port ${PORT}`)
})
