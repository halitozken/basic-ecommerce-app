import UserModel from "../models/User.js";
import asyncErrorWrapper from "express-async-handler";
import {
  validateUserInput,
  comparePassword,
} from "../helpers/input/inputHelpers.js";

const register = asyncErrorWrapper(async (req, res, next) => {
  const information = req.body;
  const user = await UserModel.create({ ...information });

  return res.status(200).json({
    success: true,
    data: user,
  });
});

const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  if (!validateUserInput) {
    return next(new CustomError("Please check your inputs", 400));
  }

  const user = await UserModel.findOne({ email }).select("+password");

  if (!comparePassword(password, user.password)) {
    return next(new CustomError("Please check your credentials", 400));
  }

  sendJwtToClient(user, res);
});

export { register, login };
