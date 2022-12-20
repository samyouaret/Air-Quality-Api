import express from 'express';
import AirQualityController from './AirQualityController';
import AirQualityService from './AirQualityService';
import { IqairApiFactory } from './IqairApiFactory';

export default async function (app: any): Promise<void> {
 const iqairApiFactory =  new IqairApiFactory();
  const iqairApi = iqairApiFactory.create();
  const service = new AirQualityService(iqairApi);
  const controller: AirQualityController = new AirQualityController(service);
  const router: express.Router = express.Router();
  router.get('/api/air-quality', controller.get.bind(controller));
  (app as any).getApplicationGateWay().getServer().use(router);
}
