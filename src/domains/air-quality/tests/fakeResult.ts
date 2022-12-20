import { AirQualityResultContract } from "../../../infrastructure/airq-api/AirQualityResultContract";

export const fakeResult: AirQualityResultContract = {
  Result: {
    "pollution": {
        "ts": "2017-02-01T01:15:00.000Z",
        "aqius": 18,
        "mainus": "p1",
        "aqicn": 20,
        "maincn": "p1",
    }
  }
};