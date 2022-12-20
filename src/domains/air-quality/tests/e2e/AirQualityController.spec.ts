import Application from "../../../../core/Application";
import { createExpressApp } from "../../../../infrastructure/gateways/http/ExpressFactory";
import request from 'supertest'

const expressApp = createExpressApp();
const app = new Application(expressApp);

beforeAll(async () => {
    await app.init();
});

test('Integration: Should get correct result with Paris city params', (done) => {
    jest.useFakeTimers(); 
    request.agent(app.getApplicationGateWay().getServer())
            .get(`/api/air-quality`)
            .query({ lat: 48.856613, lon: 2.352222 })
            .expect(200)
            .end(function (err: any, res: any) {
                const result = res.body;
                expect(result).toBeDefined();
                expect(result.Result).toBeInstanceOf(Object);
                expect(result.Result).toHaveProperty(['pollution']);
                expect(result.Result.pollution).toHaveProperty('ts');
                expect(result.Result.pollution).toHaveProperty('aqius');
                expect(result.Result.pollution).toHaveProperty('mainus');
                expect(result.Result.pollution).toHaveProperty('aqicn');
                expect(result.Result.pollution).toHaveProperty('maincn');
                done();
            });
});