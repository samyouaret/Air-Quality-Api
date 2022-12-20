import { Request, Response } from 'express';
import AirQualityService from './AirQualityService';

export default class AirQuality {
  constructor(private readonly airQualityService: AirQualityService) {}

  async get(req: Request, res: Response) {
    const lat = parseFloat(req.query.lat as string);
    const lon = parseFloat(req.query.lon as string);
    console.log(`lat: ${lat}, lon: ${lon}`);
    res.json(await this.airQualityService.getByNearestCity(lat, lon));
  }
}
