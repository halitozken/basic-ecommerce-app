import express from "express";
import user from "./user.js";
import auth from "./auth.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/user", user);

export default router;
