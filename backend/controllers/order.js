import asyncErrorWrapper from "express-async-handler";
import OrderModel from "../models/Order.js";

const createOrder = asyncErrorWrapper(async (req, res, next) => {
  const id = req.params;
  const { information } = req.body;
  const order = await OrderModel.create({ ...information });

  return res.status(200).json({
    success: true,
    data: order,
  });
});

const deleteOrder = asyncErrorWrapper(async (req, res, next) => {
  // Delete a order
});

export { createOrder, deleteOrder };
