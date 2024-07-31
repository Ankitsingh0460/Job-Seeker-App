import express from "express";
import {
  getUser,
  logout,
  register,
  signIn,
} from "../controllers/userController.js";
import { isAuthorised } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/signin", signIn);
router.get("/logout", isAuthorised, logout);
router.get("/getuser", isAuthorised, getUser);

export default router;
