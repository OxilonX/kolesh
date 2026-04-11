import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware";
//controllers imports
import { getGoals, addGoal } from "../controllers/goalControllers";
const router = Router();

//GET Routes
router.get("/", requireAuth, getGoals);

//POST Routes
router.post("/", requireAuth, addGoal);
export default router;