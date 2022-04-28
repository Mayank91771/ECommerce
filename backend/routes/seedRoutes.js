import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";
import User from "../models/userModel.js";

const seedRouter = express.Router(); //seedRouter is an object from express.Router()

seedRouter.get("/", async (req, res) => {
  //Remove all the previously stored products
  await Product.remove({}); //({}) returns all the product
  const createdProducts = await Product.insertMany(data.products); //insert all the records from data.js
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;
