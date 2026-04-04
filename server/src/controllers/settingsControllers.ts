import { Response, Request } from "express";
import prisma from "../lib/prisma";
//PUT CONTROLLERS
export const changeMode = async (req: Request, res: Response) => {
  try {
    const userId = req?.user?.id as string;
    const isDark = req.body?.data as boolean;
    if (!userId) return res.status(400).json({ error: "User ID is required." });

    const result = await prisma.settings.upsert({
      where: { userId: userId },
      create: {
        userId: userId,
        mode: isDark ? "light" : "dark",
      },
      update: {
        mode: isDark ? "light" : "dark",
      },
    });

    return res.status(200).json({ msg: "Theme switched successfully.", mode: result.mode });
  } catch (error: any) {
    return res.status(500).json({ error: "Failed to switch theme." });
  }
};

//GET CONTROLLERS
export const getMode = async (req: Request, res: Response) => {
  try {
    const userId = req?.user?.id as string;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    const result = await prisma.settings.findUnique({
      where: { userId: userId },
      select: {
        mode: true,
      },
    });

    // If no settings exist, create default and return
    if (!result) {
      const newSettings = await prisma.settings.create({
        data: {
          userId: userId,
          mode: "dark",
        },
      });
      return res.status(200).json({ mode: newSettings.mode });
    }

    return res.status(200).json({ mode: result.mode });
  } catch (error: any) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
