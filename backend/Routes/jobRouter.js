import express from "express";
import { getAllJobs } from "../controllers/jobController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  postJob,
  getMyJob,
  updateJob,
  deletejob,
  getSingleJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.get("/getalljobs", getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getmypost", isAuthenticated, getMyJob);
router.put("/updatejob/:id", isAuthenticated, updateJob);
router.delete("/deletejob/:id", isAuthenticated, deletejob);
router.get("/:id", isAuthenticated, getSingleJob);

export default router;
