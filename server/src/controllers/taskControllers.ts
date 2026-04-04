import { Response, Request } from "express";
import prisma from "../lib/prisma.js";
//POST CONTROLLERS
export const addTask = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { name, goalsId }: { name: string; goalsId?: string } = req.body;

    if (!userId) {
      return res
        .status(401)
        .json({ error: "Unauthorized - User ID required." });
    }
    if (!name) {
      return res.status(400).json({ msg: "Task name is required." });
    }

    const task = await prisma.tasks.create({
      data: {
        name: name,
        userId: userId,
        goalsId: goalsId || undefined,
      },
    });

    return res.status(201).json({
      msg: "Task added successfully",
      task,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: "Failed to create task",
    });
  }
};

//GET CONTROLLERS
export const getTasks = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({ msg: "User ID is required." });
    }

    const tasks = await prisma.tasks.findMany({
      where: { userId: userId },
      select: {
        id: true,
        name: true,
        createdAt: true,
        isDone: true,
      },
    });
    return res.status(200).json({
      msg: "Tasks fetched successfully",
      tasks,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: "Failed to fetch tasks",
      msg: error.message || String(error),
    });
  }
};

//PUT CONTROLLERS
export const updateTask = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const taskId = req.params?.taskId as string;
    const { name }: { name: string } = req.body;

    if (!userId || !name || !taskId) {
      return res
        .status(400)
        .json({ msg: "User ID, task name, and task ID are required." });
    }

    const existingTask = await prisma.tasks.findFirst({
      where: { id: taskId, userId: userId },
    });

    if (!existingTask) {
      return res.status(404).json({ error: "Task not found." });
    }

    const updatedTask = await prisma.tasks.update({
      where: { id: taskId },
      data: {
        name: name,
      },
    });

    return res.status(200).json({
      msg: "Task updated successfully",
      updatedTask,
    });
  } catch (error: any) {
    return res.status(500).json({ error: "Failed to update task" });
  }
};
export const checkTask = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const taskId = req.params?.taskId as string;
    const { isDone }: { isDone: boolean } = req.body;

    if (!userId || !taskId) {
      return res.status(400).json({ msg: "User ID and task ID are required." });
    }

    const existingTask = await prisma.tasks.findFirst({
      where: { id: taskId, userId: userId },
    });

    if (!existingTask) {
      return res.status(404).json({ error: "Task not found." });
    }

    const updateResult = await prisma.tasks.updateMany({
      where: {
        id: taskId,
        userId: userId,
      },
      data: {
        isDone: !isDone,
      },
    });

    return res.status(200).json({
      msg: "Task updated successfully",
      updateResult,
    });
  } catch (error: any) {
    console.error("[checkTask] Error:", error.message);
    return res.status(500).json({ error: "Failed to update task" });
  }
};

//DELETE CONTROLLERS
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const taskId = req.params?.taskId as string;
    if (!userId || !taskId) {
      return res.status(400).json({ msg: "User ID and Task ID are required." });
    }
    const result = await prisma.tasks.deleteMany({
      where: {
        id: taskId,
        userId: userId,
      },
    });
    if (!result)
      return res.status(404).json({ error: "Failed to delete task." });
    return res.status(201).json({
      msg: "Task deleted successfully",
      result,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete task" });
  }
};
