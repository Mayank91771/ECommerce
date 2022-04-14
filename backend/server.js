import express from "express";
import data from "../backend/data.js";
import cors from "cors";

// const cors = require("cors");
const app = express();
app.use(cors());

//test
//creating a path
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
