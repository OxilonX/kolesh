import { Response, Request } from "express";
import prisma from "../lib/prisma";
import { Priority } from "@prisma/client";

//GET CONTROLLERS
export const getCategories = async (req: Request, res: Response) => {
  try {
    const userId = req?.user?.id as string;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }
    const categories = await prisma.category.findMany({
      where: { userId: userId },
      select: {
        name: true,
      },
    });
    if (!categories) {
      return res.status(401).json({ msg: "bad request, Categories not found" });
    }

    return res.status(200).json({ categories });
  } catch (error: any) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
//POST CONTROLLERS
export const addCategory = async (req: Request, res: Response) => {
  try {
    const userId = req?.user?.id as string;
    const { name } = req.body?.data as {
      name: string;
    };
    if (!userId) return res.status(400).json({ error: "User ID is required." });
    if (!name)
      return res.status(400).json({ error: "Category name is required." });

    const result = await prisma.category.create({
      data: {
        userId: userId,
        name: name,
      },
    });
    if (!result) res.status(403).json({ error: "Category Creation Failed" });
    return res
      .status(200)
      .json({ msg: "Category Added successfully.", category: result });
  } catch (error: any) {
    return res.status(500).json({ error: "Failed to add goal." });
  }
};
