import { Router } from "express";
import { getJobs, getJob, addJob, updateJob, deleteJob } from "./jobController.js";

const router = Router();
router.route("/").get(getJobs).post(addJob);
router.route("/:id").get(getJob).put(updateJob).delete(deleteJob);

export default router;
