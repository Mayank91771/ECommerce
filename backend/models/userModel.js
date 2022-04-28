import mongoose from "mongoose";

//Defining schema
const userSchema = new mongoose.Schema(
  {
    //first parameter: fields of schema
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    //second parameter : optionals
    timestamps: true, //it will automatically create two more field i.e., created at and updated at
  }
);

const User = mongoose.model("User", userSchema); // (name of the model, schema name)
export default User;
