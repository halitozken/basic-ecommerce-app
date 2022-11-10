import express from "express";
import { getAllUsers, editUser } from "../controllers/user.js";

const router = express.Router();

router.get("/allusers", getAllUsers);
router.put("/edit/:id", editUser);

export default router;
