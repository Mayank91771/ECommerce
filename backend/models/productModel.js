import mongoose from "mongoose";

//Defining schema
const productSchema = new mongoose.Schema(
  {
    //first parameter: fields of schema
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    //second parameter : optionals
    timestamps: true, //it will automatically create two more field i.e., created at and updated at
  }
);

const Product = mongoose.model("Product", productSchema); // (name of the model, schema name)
export default Product;
