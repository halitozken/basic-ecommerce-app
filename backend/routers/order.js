import express from "express";
import { createOrder, deleteOrder, editOrder } from "../controllers/order.js";

const router = express.Router({ mergeParams: true });

router.get("/", createOrder);
router.delete("/:order_id/delete", deleteOrder);
router.put("/:order_id/edit", editOrder);

export default router;
