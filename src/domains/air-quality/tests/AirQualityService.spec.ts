import AirQualityService from "../AirQualityService";
import { fakeResult } from "./fakeResult";

test('Should return correct result with specific params', async() => {
    // create mock of AirQualityService
    const airQualityService = new AirQualityService();
    const result = await airQualityService.getByNearestCity(1.3, 4.3);
    //expect result to be subset of resultFake
    expect(result).toEqual(fakeResult);
});