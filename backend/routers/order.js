import express from "express";
import { createOrder, deleteOrder } from "../controllers/order.js";

const router = express.Router();

router.get("/neworder/:id", createOrder);
router.delete("/deleteorder/:id", deleteOrder);

export default router;
