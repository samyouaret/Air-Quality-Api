import { Request, Response } from 'express';
import AirQualityTrackerService from './AirQualityTrackerService';

export default class AirQualityTrackerController {
  constructor(private readonly airQualityService: AirQualityTrackerService) {}
  
  async track (req: Request, res: Response) {
    const latitude = parseFloat(req.body.latitude);
    const longitude = parseFloat(req.body.longitude);
    res.json(await this.airQualityService.track(latitude, longitude));
  }

  async getWorstAirQuality(req: Request, res: Response) {
    const lon = 48.856614;
    const lat = 37.338208;
    const ts = req.query.ts;
    res.json(await this.airQualityService.getWorstAirQuality(lat, lon, ts as string));
  }
}
