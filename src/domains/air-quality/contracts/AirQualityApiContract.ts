import { AirQualityResultContract } from "./AirQualityResultContract";

export interface AirQualityApiContract {
    getNearestCity: (lat: number, lon: number) => Promise<AirQualityResultContract>;
}