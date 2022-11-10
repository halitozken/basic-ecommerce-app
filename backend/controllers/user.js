import UserModel from "../models/User.js";
import asyncErrorWrapper from "express-async-handler";

const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
  const users = await UserModel.find();

  return res.status(200).json({
    success: true,
    data: users,
  });
});

const editUser = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const user = await UserModel.findById(id);

  const information = req.body;
});

export { getAllUsers, editUser };
