import dotenv from 'dotenv';
dotenv.config();
import Application from './Application';
import { createExpressApp } from '../infrastructure/gateways/http/ExpressFactory';

export default {
  start: async function () {
    const expressApp = createExpressApp();
    const app = new Application(expressApp);
    await app.start();
  }
};
