import { Request, Response } from "express";
import AirQualityTrackerService from "./AirQualityTrackerService";

export default class AirQualityTrackerController {
  constructor(private readonly airQualityService: AirQualityTrackerService) {}

  async track(req: Request, res: Response) {
    const latitude = parseFloat(req.body.latitude);
    const longitude = parseFloat(req.body.longitude);
    if (isNaN(latitude) || isNaN(longitude)) {
      res.status(400);
      res.json({ error: "latitude and longitude must be numbers" });
      return;
    }
    res.status(201);
    res.json(await this.airQualityService.track(latitude, longitude));
  }

  async getAirQuality(req: Request, res: Response) {
    const latitude = parseFloat(req.query.latitude as string);
    const longitude = parseFloat(req.query.longitude as string);
    if (isNaN(latitude) || isNaN(longitude)) {
      res.status(400);
      res.json({ error: "latitude and longitude must be numbers" });
      return;
    }

    res.json(
      await this.airQualityService.getWorstAirQualityTs(latitude, longitude)
    );
  }
}
