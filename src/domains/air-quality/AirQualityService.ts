import { AirQualityApiContract } from "../../infrastructure/airq-api/AirQualityApiContract";
import { AirQualityResultContract } from "../../infrastructure/airq-api/AirQualityResultContract";
import { AirQualityServiceContract } from "./contracts/AirQualityServiceContract";

export class AirQualityService implements AirQualityServiceContract {
  constructor(private api: AirQualityApiContract) {}

  async getByNearestCity(
    longitude: number,
    latitude: number
  ): Promise<AirQualityResultContract> {
    return this.api.getNearestCity(longitude, latitude);
  }
}

export default AirQualityService;
