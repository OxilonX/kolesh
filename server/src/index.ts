import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server as SocketServer } from "socket.io";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";
import prisma from "./lib/prisma.js";
import "dotenv/config";
//routes imports
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";

const app: Application = express();
const httpServer = createServer(app);

const io = new SocketServer(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.all(/^\/api\/auth\/.*$/, toNodeHandler(auth));
console.log(
  "Checking DB URL:",
  process.env.DATABASE_URL ? "Defined ✅" : "UNDEFINED ❌",
);
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Debug route to check cookies
app.get("/api/debug-cookies", (req: Request, res: Response) => {
  res.json({
    cookies: req.headers.cookie,
    cookieHeader: req.headers.cookie,
    hasSessionCookie: !!req.headers.cookie?.includes("better-auth"),
  });
});

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("[Global Error]:", err);
  res.status(500).json({ error: err.message, stack: err.stack });
});

//use routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/settings", settingsRoutes);

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("join-room", (roomId: string) => {
    socket.join(roomId);
  });

  socket.on("leave-room", (roomId: string) => {
    socket.leave(roomId);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app, prisma, io };
