import UserModel from "../models/User.js";
import asyncErrorWrapper from "express-async-handler";

const register = asyncErrorWrapper(async (req, res, next) => {
  const information = req.body;
  const user = await UserModel.create({ ...information });

  return res.status(200).json({
    success: true,
    data: user,
  });
});

const login = asyncErrorWrapper(async (req, res, next) => {
  // login
});

export { register, login };
