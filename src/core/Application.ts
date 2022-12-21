import { PrismaClient } from "@prisma/client";
import { ApplicationGatewayContract } from "./ApplicationGatewayContract";

export default class Application {
  appGateway: ApplicationGatewayContract;
  prisma: PrismaClient;
  constructor(appGateway: ApplicationGatewayContract, prisma: PrismaClient) {
    this.appGateway = appGateway;
    this.prisma = prisma;
  }

  getPrisma(): PrismaClient {
    return this.prisma;
  }

  setApplicationGateWay(appGateway: ApplicationGatewayContract): any {
    this.appGateway = appGateway;
  }

  getApplicationGateWay(): any {
    return this.appGateway;
  }

  async start() {
    // eslint-disable-next-line no-console
    console.log("Init App ...");
    await this.init();
    // eslint-disable-next-line no-console
    console.log("Starting App ...");
    await this.appGateway.start();
  }

  async init() {
    await this.prisma.$connect();
    console.log("Connected to database successfully");
    await this.appGateway.init(this);
  }
}
