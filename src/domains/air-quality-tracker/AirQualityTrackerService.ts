import AirQualityTrackerRepository from "./AirQualityTrackerRepository";
import { AirQualityApiContract } from "../../infrastructure/airq-api/AirQualityApiContract";

export class AirQualityTrackerService {
  constructor(private api: AirQualityApiContract,private repository: AirQualityTrackerRepository) {}

  async track(longitude:number, latitude:number):Promise<any> {
    let result = await this.api.getNearestCity(longitude, latitude);
    return await this.repository.save(longitude, latitude, result.Result.pollution);
  }

  getWorstAirQuality(lat: number, lon: number,ts:string): any {
        return this.repository.getWorstAirQuality(lat, lon,ts);
  }
}

export default AirQualityTrackerService;
