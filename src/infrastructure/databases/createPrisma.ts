import * as dbConfig from "./config/prisma"
import { PrismaClient } from '@prisma/client'

export function createPrisma(): PrismaClient {
    let options = (dbConfig as any)[process.env.APP_ENV as string];    
    if (!options) {
        throw new Error("Invalid environment string");
    }

    return new PrismaClient(options);
}