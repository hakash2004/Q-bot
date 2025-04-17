import mongoose, { Schema } from "mongoose";

const loginSchema = new Schema(
  {
    userName: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", loginSchema);

export default User;
