import AirQualityService from "../../AirQualityService";
import { IqairApiFactory } from "../../../../infrastructure/airq-api/IqairApiFactory";

test('Integration: Should get correct result with Paris city params', async() => {
    const iqairApiFactory =  new IqairApiFactory();
    const iqairApi = iqairApiFactory.create();
    const airQualityService = new AirQualityService(iqairApi);
    const result = await airQualityService.getByNearestCity(48.856613, 2.352222);
    expect(result).not.toBeUndefined();
    expect(result.Result).toBeInstanceOf(Object);
    expect(result.Result).toHaveProperty(['pollution']);
    expect(result.Result.pollution).toHaveProperty('ts');
    expect(result.Result.pollution).toHaveProperty('aqius');
    expect(result.Result.pollution).toHaveProperty('mainus');
    expect(result.Result.pollution).toHaveProperty('aqicn');
    expect(result.Result.pollution).toHaveProperty('maincn');
});