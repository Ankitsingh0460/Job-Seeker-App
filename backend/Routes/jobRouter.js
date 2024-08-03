import express from "express";
import { getAllJobs } from "../controllers/jobController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { postJob, getMyJob } from "../controllers/jobController.js";

const router = express.Router();

router.get("/getalljobs", getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getmypost", isAuthenticated, getMyJob);

export default router;
