import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware";
//controllers imports
import {
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/taskControllers";

const router = Router();

//POST Reqs
router.post("/", addTask);

//GET Reqs
router.get("/", requireAuth, getTasks);

//PUT Reqs
router.put("/:taskId", requireAuth, updateTask);

//DELETE Reqs
router.delete("/:taskId", requireAuth, deleteTask);

export default router;
