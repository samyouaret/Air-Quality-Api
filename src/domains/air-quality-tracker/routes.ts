import express from 'express';
import { ApplicationContract } from '../../core/ApplicationContract';
import AirQualityTrackerController from './AirQualityTrackerController';
import AirQualityTrackerRepository from './AirQualityTrackerRepository';
import AirQualityTrackerService from './AirQualityTrackerService';
import { IqairApiFactory } from '../../infrastructure/airq-api/IqairApiFactory';

export default async function AirQualityTrackerRoutes(app: ApplicationContract): Promise<void> {
 const iqairApiFactory =  new IqairApiFactory();
  const iqairApi = iqairApiFactory.create();
  const router: express.Router = express.Router();

  const repository = new AirQualityTrackerRepository(app.getPrisma());
  const trackerService = new AirQualityTrackerService(iqairApi, repository);
  const trackerController: AirQualityTrackerController = new AirQualityTrackerController(trackerService);

  router.get('/api/tracker/worst', trackerController.getWorstAirQuality.bind(trackerController));
  router.use(express.json());
  router.post('/api/tracker', trackerController.track.bind(trackerController));

  (app as ApplicationContract).getApplicationGateWay().getServer().use(router);
}
