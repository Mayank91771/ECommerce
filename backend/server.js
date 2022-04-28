import express from "express";
import data from "../backend/data.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();

//dotenv.config() will load the MONGODB_URI from .env folder to process.env.MONGODB_URI below
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

// const cors = require("cors");
const app = express();
app.use(cors());

//using seedRouter in express
app.use("/api/seed", seedRouter);

//test
//creating a path
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });
app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
