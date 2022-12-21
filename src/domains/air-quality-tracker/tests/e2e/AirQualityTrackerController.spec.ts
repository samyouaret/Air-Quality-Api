import Application from "../../../../core/Application";
import { createExpressApp } from "../../../../infrastructure/gateways/http/ExpressFactory";
import request from "supertest";
import { createPrisma } from "../../../../infrastructure/databases/createPrisma";

const prisma = createPrisma();
const expressApp = createExpressApp();
const app = new Application(expressApp, prisma);
const PATH_NAME = "/api/iqair/tracker";

beforeAll(async () => {
  await app.init();
});

afterAll(async () => {
  await prisma.$disconnect();
});

afterEach(async () => {
  await prisma.airQualityTracker.deleteMany();
});

test("E2E: Should Track given latitude and longitude", (done) => {
  request
    .agent(app.getApplicationGateWay().getServer())
    .post(PATH_NAME)
    .set("Content-Type", "application/json")
    .send({ latitude: 48.856613, longitude: 2.352222 })
    .expect(201)
    .end(function (err: any, res: any) {
      const result = res.body;
      expect(err).toBeFalsy();
      expect(result).toBeDefined();
      expect(result.latitude).toBe(48.856613);
      expect(result.longitude).toBe(2.352222);
      expect(result).toHaveProperty("ts");
      expect(result).toHaveProperty("aqius");
      expect(result).toHaveProperty("mainus");
      expect(result).toHaveProperty("aqicn");
      expect(result).toHaveProperty("maincn");
      done();
    });
});
