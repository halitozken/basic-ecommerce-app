import express from "express";
import { createOrder, deleteOrder } from "../controllers/order.js";

const router = express.Router();

router.get("/create/:id", createOrder);
router.delete("/delete/:id", deleteOrder);

export default router;
