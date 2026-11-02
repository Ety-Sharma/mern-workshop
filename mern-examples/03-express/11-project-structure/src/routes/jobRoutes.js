// routes: connects a URL + method to a controller function
import { Router } from "express";
import { getJobs, addJob } from "../controllers/jobController.js";

const router = Router();
router.get("/", getJobs);
router.post("/", addJob);

export default router;
