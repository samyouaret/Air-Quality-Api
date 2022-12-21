import express from "express";
import { ApplicationContract } from "../../core/ApplicationContract";
import AirQualityController from "./AirQualityController";
import AirQualityService from "./AirQualityService";
import { IqairApiFactory } from "../../infrastructure/airq-api/IqairApiFactory";

export default async function (
  app: ApplicationContract
): Promise<void | express.Router> {
  const iqairApiFactory = new IqairApiFactory();
  const iqairApi = iqairApiFactory.create();
  const service = new AirQualityService(iqairApi);
  const controller: AirQualityController = new AirQualityController(service);
  const router: express.Router = express.Router();
  router.get(
    "/api/iqair",
    controller.getNearestCity.bind(controller)
  );

  return router;
}
