import express from "express";
import user from "./user.js";
import auth from "./auth.js";
import order from "./order.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/order", order);

export default router;
