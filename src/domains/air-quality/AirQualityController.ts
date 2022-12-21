import { Request, Response } from "express";
import AirQualityService from "./AirQualityService";

export default class AirQualityController {
  constructor(private readonly airQualityService: AirQualityService) {}

  async getNearestCity(req: Request, res: Response) {
    const latitude = parseFloat(req.query.latitude as string);
    const longitude = parseFloat(req.query.longitude as string);
    res.json(
      await this.airQualityService.getByNearestCity(latitude, longitude)
    );
  }
}
