import express from "express";
import { getAllUsers, editUser, deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.put("/edit/:id", editUser);
router.delete("/delete/:id", deleteUser);

export default router;
