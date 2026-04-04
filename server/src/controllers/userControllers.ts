import { Request, Response } from "express";
import prisma from "../lib/prisma.js";

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req?.user?.id;
    const { age, gender } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        age: age || undefined,
        gender: gender || undefined,
      },
    });

    res.json({ user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to update profile" });
  }
};
//update reqs
export const updateUserCountry = async (req: Request, res: Response) => {
  try {
    const userId = req?.user?.id;
    const { country } = req.body;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    if (!country)
      return res.status(401).json({ error: "Country field is messing" });

    const updatedUser = await prisma.user.update({
      where: { id: userId as string },
      data: { country: country as string },
    });

    res.status(200).json({ msg: "country updated successfuly" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update country" });
  }
};
