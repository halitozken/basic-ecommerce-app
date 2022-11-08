import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },

  lastName: {
    type: String,
    required: [true, "Please provide a last name"],
  },

  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "please provide a valid email",
    ],
  },

  password: {
    type: String,
    minLength: [6, "Please provide a password with min length 6"],
    required: [true, "Please provide a password"],
    select: false,
  },

  gender: {
    type: String,
    enum: "Male" || "Female",
  },

  place: {
    type: String,
  },

  address: {
    type: String,
    minLength: [25, "Please provide a password with min length 6"],
  },

  blocked: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
