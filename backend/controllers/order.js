import asyncErrorWrapper from "express-async-handler";
import OrderModel from "../models/Order.js";
import UserModel from "../models/User.js";

const createOrder = asyncErrorWrapper(async (req, res, next) => {
  // create Order and push order to array in user
  const userId = req.user.id;
  const user = await UserModel.findById(userId);

  const { product } = req.body; //! it can be array
  // id ye göre ekle (objectId)
  const order = await OrderModel.create({
    owner: userId,
    product,
  });
});

const deleteOrder = asyncErrorWrapper(async (req, res, next) => {
  // Delete a order
});

const editOrder = asyncErrorWrapper(async (req, res, next) => {
  // Edit a order
});

export { createOrder, deleteOrder, editOrder };
