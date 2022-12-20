import { AirQualityResultContract } from "../../../infrastructure/airq-api/AirQualityResultContract";

export interface AirQualityServiceContract {
    getByNearestCity(longitude: number, latitude: number): Promise<AirQualityResultContract>;
}