import { Response, Request } from "express";
import prisma from "../lib/prisma";
import { Priority } from "@prisma/client";

//GET CONTROLLERS
export const getGoals = async (req: Request, res: Response) => {
  try {
    const userId = req?.user?.id as string;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }
    const goals = await prisma.goals.findMany({
      where: { userId: userId },
    });
    if (!goals) {
      return res.status(401).json({ msg: "bad request, Goals not found" });
    }

    return res.status(200).json({ goals });
  } catch (error: any) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
//POST CONTROLLERS
export const addGoal = async (req: Request, res: Response) => {
  try {
    const userId = req?.user?.id as string;
    const { priority, name, categoryId } = req.body?.data as {
      priority: Priority;
      name: string;
      categoryId: string;
    };
    if (!userId) return res.status(400).json({ error: "User ID is required." });
    if (!name || !priority || !categoryId)
      return res
        .status(400)
        .json({ error: "Goal name and Priority are required." });

    const result = await prisma.goals.create({
      data: {
        userId: userId,
        name: name,
        priority: priority,
        categoryId: categoryId,
      },
    });
    if (!result) res.status(403).json({ error: "Goals Creation Failed" });
    return res
      .status(200)
      .json({ msg: "Goal Added successfully.", goals: result });
  } catch (error: any) {
    return res.status(500).json({ error: "Failed to add goal." });
  }
};
