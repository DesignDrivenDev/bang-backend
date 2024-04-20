import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
});

const User = mongoose.model("user", userModel);
export default User;
