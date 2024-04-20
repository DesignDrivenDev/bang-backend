import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
// Add a new user
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/", deleteUser);

export default router;
