import { PrismaClient  } from "@prisma/client";


// In production,
// export const db = new PrismaClient(); would be initialized multiple times because Next.js uses Hot Reload

// So, when we define the 'db' variable, we check if we have it stored in globalThis.prisma
// If we don't (meaning that we just started the app for the first time), we just initialize new PrismaClient();
// const db = globalThis.prisma || new PrismaClient();

// Since we are in devleopment "if (process.env.NODE_ENV !== "production")"
// We assign the db const to globalThis.prisma "globalThis.prisma = db"
// When Hot Reload activates, globalThis.prisma is seen, and 'new PrismaClient()' is not initialized again.
// global is excluded from Hot Reload


declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
