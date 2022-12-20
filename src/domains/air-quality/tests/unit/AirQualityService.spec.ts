import AirQualityService from "../../AirQualityService";
import { fakeResult } from "../fakeResult";

test('Unit: Should get correct result with Paris city params', async() => {
    const iqairApi = {
        getNearestCity: jest.fn().mockReturnValue(fakeResult)
    };
    const airQualityService = new AirQualityService(iqairApi);
    const result = await airQualityService.getByNearestCity(48.856613, 2.352222);
    expect(result).toEqual(fakeResult);
});