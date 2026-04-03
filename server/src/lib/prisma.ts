import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not defined");
}
const dbUrl = new URL(process.env.DATABASE_URL);
const password = dbUrl.password;
if (!password || typeof password !== "string" || password.length === 0) {
  throw new Error(
    "Database password is missing or invalid. Please check your DATABASE_URL environment variable.",
  );
}
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("error", (err) => {
  console.error("Unexpected PostgreSQL pool error:", err);
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;
