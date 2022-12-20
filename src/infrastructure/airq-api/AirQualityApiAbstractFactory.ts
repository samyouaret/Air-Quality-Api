import { AirQualityApiContract } from "./AirQualityApiContract";

export interface AirQualityApiAbstractFactory {
    create: () => AirQualityApiContract;
}