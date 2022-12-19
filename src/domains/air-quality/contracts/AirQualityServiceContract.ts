import { AirQualityResultContract } from "./AirQualityResultContract";

export interface AirQualityServiceContract {
    getByNearestCity(longitude: number, latitude: number): Promise<AirQualityResultContract>;
}