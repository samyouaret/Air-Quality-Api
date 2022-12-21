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
    const latitude = parseFloat(req.query.latitude as string);
    const longitude = parseFloat(req.query.longitude as string);
    res.json(await this.airQualityService.getWorstAirQualityTs(latitude, longitude));
  }
}
