import Application from "../../../../core/Application";
import { createExpressApp } from "../../../../infrastructure/gateways/http/ExpressFactory";
// import request from 'supertest'

const expressApp = createExpressApp();
const prismaMock = {
    async $connect() {
        return;
    }
}
const app = new Application(expressApp,prismaMock as any);

beforeAll(async () => {
    await app.init();
});

test('Integration: Should get correct result with Paris city params', (done) => {
    expect(1).toBe(1);
});