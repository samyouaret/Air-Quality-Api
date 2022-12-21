import AirQualityTrackerRepository from "./AirQualityTrackerRepository";
import { AirQualityApiContract } from "../../infrastructure/airq-api/AirQualityApiContract";
import { AirQualityTracker } from "@prisma/client";

export class AirQualityTrackerService {
  constructor(private api: AirQualityApiContract,private repository: AirQualityTrackerRepository) {}

  async track(longitude:number, latitude:number):Promise<AirQualityTracker | undefined> {
    let result = await this.api.getNearestCity(longitude, latitude);
    
    return await this.repository.save(longitude, latitude, result.Result.pollution);
  }

  getWorstAirQualityTs(latitude: number, longitude: number): any {
    return this.repository.getWorstAirQualityTs(latitude, longitude);
  }
}

export default AirQualityTrackerService;
