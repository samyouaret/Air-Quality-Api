import { PrismaClient } from "@prisma/client";
import { ApplicationGatewayContract } from "./ApplicationGatewayContract";

export interface ApplicationContract extends ApplicationGatewayContract {
  getApplicationGateWay(): any;
  getPrisma(): PrismaClient;
}
