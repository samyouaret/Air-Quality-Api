import ExpressApplication from './ExpressApplication';
import express from 'express';
import { ApplicationGatewayContract } from '../../../core/ApplicationGatewayContract';

export function createExpressApp(): ApplicationGatewayContract {
  const server = express();
  const expressApp = new ExpressApplication(server, {
    environment: process.env.APP_ENV as string,
    cors: false,
    helmet: true,
    openApiDoc: true,
    port: process.env.APP_PORT as string
  });

  return expressApp;
}
