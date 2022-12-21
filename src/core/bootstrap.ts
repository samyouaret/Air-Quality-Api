import dotenv from "dotenv";
dotenv.config();
import Application from "./Application";
import { createExpressApp } from "../infrastructure/gateways/http/ExpressFactory";
import { createPrisma } from "../infrastructure/databases/createPrisma";

export default {
  start: async function () {
    const expressApp = createExpressApp();
    const prisma = createPrisma();
    const app = new Application(expressApp, prisma);
    await app.start();
  },
};
