import "dotenv/config";
import path from "node:path";
import type { PrismaConfig } from "prisma";

export default {
  schema: path.join("prisma", "schema.prisma"),
  
  // ✅ Prisma 7: Database URL ab YAHAN define hoti hai
  migrations: {
    path: path.join("prisma", "migrations"),
  },
  
  datasource: {
    url: process.env.DATABASE_URL ?? "postgresql://demo:demo@localhost:5432/demo?schema=public",
  },
} satisfies PrismaConfig;