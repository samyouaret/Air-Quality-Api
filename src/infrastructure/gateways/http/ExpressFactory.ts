import ExpressApplication from './ExpressApplication';
import express from 'express';
import { ApplicationGatewayContract } from '../../../core/ApplicationGatewayContract';

export function createExpressApp(): ApplicationGatewayContract {
  const server = express();
  const expressApp = new ExpressApplication(server, {
    environment: process.env.APP_ENV as string,
    csrf: false,
    cors: false,
    helmet: true,
    parseCookie: false,
    urlencoded: true,
    openApiDoc: true,
    port: process.env.APP_PORT as string
    // view_path: pathHelper.root_path(pathHelper.env('VIEWS_PATH')) || pathHelper.view_path(),
    // view_engine: pathHelper.env('VIEWS_ENGINE'),
    // static_path: pathHelper.root_path(pathHelper.env('STATIC_PATH')) || pathHelper.static_path(),
  });

  return expressApp;
}
