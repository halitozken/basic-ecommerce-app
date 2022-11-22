import asyncErrorWrapper from "express-async-handler";
import OrderModel from "../models/Order.js";

const createOrder = asyncErrorWrapper(async (req, res, next) => {
  const user_id = req.user.id;
  const product = req.body;

  const order = await OrderModel.create({
    owner: user_id,
    product,
  });

  return res.status(200).json({
    success: true,
    data: order,
  });

});

const deleteOrder = asyncErrorWrapper(async (req, res, next) => {
  // Delete a order
});

const editOrder = asyncErrorWrapper(async (req, res, next) => {
  // Edit a order
});

export { createOrder, deleteOrder, editOrder };
