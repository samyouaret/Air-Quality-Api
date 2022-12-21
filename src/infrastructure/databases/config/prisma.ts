import { PrismaClientOptions } from "@prisma/client/runtime";

export const development: PrismaClientOptions = {
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log: ["query", "info"],
};
export const test: PrismaClientOptions = {
  datasources: {
    db: {
      url: process.env.DATABASE_URL_TEST,
    },
  },
};
export const production: PrismaClientOptions = {
  datasources: {
    db: {
      url: process.env.DATABASE_URL_PRODUCTION,
    },
  },
};
