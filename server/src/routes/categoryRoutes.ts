import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware";
//controllers imports
import { addCategory, getCategories } from "../controllers/categoryControllers";
const router = Router();

//GET Routes
router.get("/", requireAuth, getCategories);

//POST Routes
router.post("/", requireAuth, addCategory);
export default router;
