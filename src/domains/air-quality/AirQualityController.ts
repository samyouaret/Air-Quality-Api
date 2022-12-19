import { Request, Response } from 'express';
import AirQualityService from './AirQualityService';

export default class AirQuality {
  constructor(private readonly airQualityService: AirQualityService) {}

  async get(req: Request, res: Response) {
    res.json(await this.airQualityService.getByNearestCity(1,2));
  }
}
