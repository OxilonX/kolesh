import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware";
//controllers imports
import { changeMode, getMode } from "../controllers/settingsControllers.js";
const router = Router();

//PUT Reqs
router.put("/theme", requireAuth, changeMode);
//GET Reqs
router.get("/theme", requireAuth, getMode);
export default router;
