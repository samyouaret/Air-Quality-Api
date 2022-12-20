import { Request, Response } from 'express';
import AirQualityTrackerService from './AirQualityTrackerService';

export default class AirQualityTrackerController {
  constructor(private readonly airQualityService: AirQualityTrackerService) {}
  // this should be post, this will change
  async get(req: Request, res: Response) {
    const lon = 48.856614;
    const lat = 37.338208;
    res.json(await this.airQualityService.track(lat, lon));
  }

  async getWorstAirQuality(req: Request, res: Response) {
    const lon = 48.856614;
    const lat = 37.338208;
    const ts = req.query.ts;
    res.json(await this.airQualityService.getWorstAirQuality(lat, lon, ts as string));
  }
}
