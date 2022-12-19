import express from 'express';
import routes from './routes';
import { ApplicationGatewayContract } from '../../../core/ApplicationGatewayContract';
import Application from '../../../core/Application';

// declare type RouteLoader = (app: Application) => express.Router | express.RequestHandler | express.ErrorRequestHandler;
export interface ExpressConfig {
  port: string | number;
  environment?: string;
  cors?: boolean;
  helmet?: boolean;
  openApiDoc?: boolean;
  view_engine?: string;
}

export default class ExpressApplication implements ApplicationGatewayContract
{
  server: express.Express;
  private config: ExpressConfig;

  constructor(server: express.Express, config: ExpressConfig) {
    this.server = server;
    this.config = config;
  }

  getServer(): express.Express {
    return this.server;
  }

  async start(): Promise<void> {
    this.startServer();
  }

  async init(application: Application): Promise<void> {
    if (this.config.helmet) {
      const helmet = await import('helmet');
      this.server.use(helmet.default());
    }
    if (this.config.openApiDoc) {
      const swaggerUi = await import('swagger-ui-express');
      // const { apiDoc } = await import('../http/open-api-docs/api');
      // this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDoc));
    }
    await this.loadRoutes(application);
  }

  async loadRoutes(application: Application) {
    routes.forEach(async (route: any) => {
      let router: express.Router | undefined = await route(application);
      if (router instanceof express.Router || typeof router === 'function') {
        this.server.use(router);
      }
    });
  }

  startServer(): void {
    this.server.listen(this.config.port, () => {
      console.log(
        `server listening ⚡️ at http://localhost:${this.config.port}`
      );
    });
  }
}