import express from "express";
import {
  getUser,
  logout,
  register,
  signIn,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/signin", signIn);
router.get("/logout", logout);
router.get("/getuser", getUser);

export default router;
