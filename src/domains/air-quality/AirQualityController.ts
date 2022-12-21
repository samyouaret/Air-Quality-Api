import { Request, Response } from "express";
import AirQualityService from "./AirQualityService";

export default class AirQualityController {
  constructor(private readonly airQualityService: AirQualityService) {}

  async getNearestCity(req: Request, res: Response) {
    const latitude = parseFloat(req.query.latitude as string);
    const longitude = parseFloat(req.query.longitude as string);

    if (isNaN(latitude) || isNaN(longitude)) {
      res.status(400);
      res.json({ error: "latitude and longitude must be numbers" });
      return;
    }

    res.json(
      await this.airQualityService.getByNearestCity(latitude, longitude)
    );
  }
}
