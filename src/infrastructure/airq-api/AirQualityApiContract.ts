import { AirQualityResultContract } from "./AirQualityResultContract";

export interface AirQualityApiContract {
  getNearestCity: (
    latitude: number,
    longitude: number
  ) => Promise<AirQualityResultContract>;
}
