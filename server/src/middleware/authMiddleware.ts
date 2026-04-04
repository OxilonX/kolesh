import { Request, Response, NextFunction } from "express";
import { auth } from "../lib/auth.js";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        emailVerified: boolean;
        name: string | null;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
      };
    }
  }
}

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const headers = new Headers();
    Object.entries(req.headers).forEach(([key, value]) => {
      if (typeof value === "string") {
        headers.set(key, value);
      } else if (Array.isArray(value)) {
        value.forEach((v) => headers.append(key, v));
      }
    });

    const session = await auth.api.getSession({
      headers,
    });

    if (!session || !session.user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    req.user = {
      ...session.user,
      image: session.user.image ?? null,
      name: session.user.name ?? null,
    };

    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
};
