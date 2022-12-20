import { AirQualityApiContract } from "../../../infrastructure/airq-api/AirQualityApiContract";

export interface AirQualityApiAbstractFactory {
    create: () => AirQualityApiContract;
}