import User from "../models/User.js";
import asyncErrorWrapper from "express-async-handler";

const addUser = asyncErrorWrapper(async (req, res, next) => {
  const { information } = req.body;

  const user = await User.create({
    ...information,
  });

  return res.status(200).json({
    success: true,
    data: user,
  });
});

export default addUser;
