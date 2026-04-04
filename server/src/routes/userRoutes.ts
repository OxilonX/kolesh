import { Router } from "express";
import {
  updateUserCountry,
  updateUserProfile,
} from "../controllers/userControllers";
import { requireAuth } from "../middleware/authMiddleware";

const router = Router();

router.patch("/profile", requireAuth, updateUserProfile);
//update reqs
router.put("/country", requireAuth, updateUserCountry);

export default router;
